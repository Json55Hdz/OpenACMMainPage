from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import json
import os

app = FastAPI()

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelos
class Item(BaseModel):
    id: str
    name: str
    description: str
    author: str
    version: str
    category: str
    icon: Optional[str] = "package"

class Skill(Item):
    pass

class Tool(Item):
    pass

# Rutas de archivos (usando rutas absolutas basadas en el directorio de este script)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SKILLS_FILE = os.path.join(BASE_DIR, "skills.json")
TOOLS_FILE = os.path.join(BASE_DIR, "tools.json")
VERSION_FILE = os.path.join(os.path.dirname(os.path.dirname(BASE_DIR)), "version.json")

def load_json(file_path):
    if not os.path.exists(file_path):
        return []
    try:
        with open(file_path, "r", encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return []

def save_json(file_path, data):
    with open(file_path, "w", encoding='utf-8') as f:
        json.dump(data, f, indent=4)

def get_version_info():
    if not os.path.exists(VERSION_FILE):
        return {"version": "unknown"}
    with open(VERSION_FILE, "r", encoding='utf-8') as f:
        return json.load(f)

# Endpoints de Versión
@app.get("/api/version")
async def get_version():
    return get_version_info()

# Endpoints de Skills
@app.get("/api/skills", response_model=List[Skill])
async def get_skills():
    return load_json(SKILLS_FILE)

@app.post("/api/skills")
async def add_skill(skill: Skill):
    skills = load_json(SKILLS_FILE)
    skills.append(skill.dict())
    save_json(SKILLS_FILE, skills)
    return {"message": "Skill added successfully"}

# Endpoints de Tools
@app.get("/api/tools", response_model=List[Tool])
async def get_tools():
    return load_json(TOOLS_FILE)

@app.post("/api/tools")
async def add_tool(tool: Tool):
    tools = load_json(TOOLS_FILE)
    tools.append(tool.dict())
    save_json(TOOLS_FILE, tools)
    return {"message": "Tool added successfully"}

# Endpoint de Instalación
@app.post("/api/install/{type}/{item_id}")
async def install_item(type: str, item_id: str):
    if type not in ["skills", "tools"]:
        raise HTTPException(status_code=400, detail="Invalid type")
    
    # Simular instalación
    # En el futuro esto podría descargar un repo, copiar archivos, etc.
    return {"message": f"Successfully installed {type[:-1]} {item_id}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
