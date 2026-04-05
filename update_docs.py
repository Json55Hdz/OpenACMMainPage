#!/usr/bin/env python3
"""
Script para convertir archivos Markdown de ../OpenACM/docs/ en docsData.js
Uso: python update_docs.py
"""

import os
import re
from pathlib import Path

def slugify(filename):
    """Convierte nombre de archivo a slug (sin extensión, lowercase, guiones)"""
    name = Path(filename).stem
    slug = re.sub(r'[^\w\s-]', '', name.lower())
    slug = re.sub(r'[\s_]+', '-', slug)
    return slug.strip('-')

def extract_title(content, filename):
    """Extrae el título del markdown (primer #) o usa el nombre del archivo"""
    match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    if match:
        return match.group(1).strip()
    name = Path(filename).stem.replace('-', ' ').replace('_', ' ').title()
    return name

def process_markdown_files(docs_dir):
    """Procesa todos los archivos .md del directorio"""
    docs = []
    
    if not os.path.exists(docs_dir):
        print(f"❌ Error: No existe el directorio {docs_dir}")
        return docs
    
    md_files = sorted([f for f in os.listdir(docs_dir) if f.endswith('.md')])
    print(f"📁 Encontrados {len(md_files)} archivos Markdown")
    
    for filename in md_files:
        filepath = os.path.join(docs_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        doc = {
            'slug': slugify(filename),
            'title': extract_title(content, filename),
            'content': content
        }
        docs.append(doc)
        print(f"  ✓ {filename} → /docs/{doc['slug']}")
    
    return docs

def generate_docs_data_js(docs, output_path):
    """Genera el archivo docsData.js"""
    lines = ['export const docsData = [']
    
    for i, doc in enumerate(docs):
        slug = doc['slug']
        title = doc['title'].replace('\\', '\\\\').replace('"', '\\"')
        content = doc['content']
        
        lines.append('  {')
        lines.append(f'    "slug": "{slug}",')
        lines.append(f'    "title": "{title}",')
        lines.append('    "content": `')
        
        escaped_content = content.replace('\\', '\\\\')
        escaped_content = escaped_content.replace('`', '\\`')
        escaped_content = escaped_content.replace('${', '\\${')
        
        for line in escaped_content.split('\n'):
            lines.append(line)
        
        lines.append('`')
        lines.append('  },' if i < len(docs) - 1 else '  }')
    
    lines.append('];')
    lines.append('')
    lines.append('export default docsData;')
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    
    print(f"\n✅ Archivo generado: {output_path}")
    print(f"📊 Total de documentos: {len(docs)}")

def main():
    # Rutas desde la landing page
    landing_dir = Path(__file__).parent
    docs_dir = landing_dir.parent / 'OpenACM' / 'docs'
    output_file = landing_dir / 'src' / 'docsData.js'
    
    print("=" * 60)
    print("🚀 Generador de docsData.js")
    print("=" * 60)
    print(f"\n📂 Entrada:  {docs_dir}")
    print(f"📤 Salida:   {output_file}")
    print()
    
    if not docs_dir.exists():
        print(f"❌ Error: No se encontró el directorio de documentación:")
        print(f"   {docs_dir}")
        print(f"\n💡 Asegúrate de que ../OpenACM/docs/ exista")
        return
    
    docs = process_markdown_files(docs_dir)
    
    if not docs:
        print("\n⚠️  No se encontraron archivos .md para procesar.")
        return
    
    generate_docs_data_js(docs, output_file)
    
    print("\n" + "=" * 60)
    print("✨ ¡Listo! Reinicia el servidor para ver los cambios.")
    print("=" * 60)

if __name__ == '__main__':
    main()
