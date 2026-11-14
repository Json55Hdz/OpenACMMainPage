FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Ensure data files exist if they don't
RUN touch src/skills.json src/tools.json

EXPOSE 8000

CMD ["python", "src/main.py"]
