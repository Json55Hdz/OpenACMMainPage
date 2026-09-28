#!/usr/bin/env python3
"""
Script para convertir archivos Markdown de ../OpenACM/docs/ en docsData.js
Uso: python update_docs.py

Cada documento generado tiene: slug, title, section, content.
- slug:    nombre del archivo sin extensión, en minúsculas, "_" → "-"
           (DEPLOY_VPS.md → deploy-vps). DocPage.jsx usa la misma regla para
           convertir enlaces relativos "./archivo.md#ancla" en rutas /docs/<slug>.
- section: grupo del menú lateral (ver SECTIONS / section_for()).
El orden del arreglo es el orden del menú lateral; el primer documento es la
página a la que redirige /docs.
"""

import os
import re
from pathlib import Path

# Orden de las secciones en el menú lateral.
SECTIONS = ["Documentation", "Guides", "Project"]

# Guías prácticas paso a paso (archivos en MAYÚSCULAS de docs/).
GUIDES = [
    "DEPLOY_VPS.md",
    "WHATSAPP_SETUP.md",
    "GMAIL_SETUP.md",
    "HOME_ASSISTANT_SETUP.md",
    "SKILLS_TOOLS_GUIDE.md",
    "TROUBLESHOOTING.md",
    "LLM_PRICING_REFERENCE.md",
]

# Documentos del proyecto / planes de diseño (no son referencia de uso).
PROJECT = [
    "README.md",
    "CONTRIBUTING.md",
    "SECURITY.md",
    "ROADMAP_INTEGRATION.md",
    "26-dev-mode-plugin-plan.md",
]

# Títulos del menú que conviene sobreescribir.
TITLE_OVERRIDES = {
    "README.md": "Documentation Index",
}


def slugify(filename):
    """Convierte nombre de archivo a slug (sin extensión, lowercase, guiones)"""
    name = Path(filename).stem
    slug = re.sub(r'[^\w\s-]', '', name.lower())
    slug = re.sub(r'[\s_]+', '-', slug)
    return slug.strip('-')


def extract_title(content, filename):
    """Extrae el título del markdown (primer #) o usa el nombre del archivo"""
    if filename in TITLE_OVERRIDES:
        return TITLE_OVERRIDES[filename]
    match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    if match:
        return match.group(1).strip()
    name = Path(filename).stem.replace('-', ' ').replace('_', ' ').title()
    return name


def section_for(filename):
    """Sección del menú lateral para un archivo."""
    if filename in PROJECT:
        return "Project"
    if filename in GUIDES:
        return "Guides"
    if re.match(r'^\d+-', filename):
        return "Documentation"
    # Cualquier otro .md nuevo en MAYÚSCULAS se trata como guía.
    return "Guides"


def sort_key(filename):
    """Orden: por sección, luego por la posición definida en GUIDES/PROJECT o por nombre."""
    section = section_for(filename)
    if section == "Project":
        pos = PROJECT.index(filename)
    elif filename in GUIDES:
        pos = GUIDES.index(filename)
    else:
        pos = len(GUIDES)
    return (SECTIONS.index(section), pos, filename)


def process_markdown_files(docs_dir):
    """Procesa todos los archivos .md del directorio"""
    docs = []

    if not os.path.exists(docs_dir):
        print(f"❌ Error: No existe el directorio {docs_dir}")
        return docs

    md_files = sorted(
        (f for f in os.listdir(docs_dir) if f.endswith('.md')),
        key=sort_key,
    )
    print(f"📁 Encontrados {len(md_files)} archivos Markdown")

    for filename in md_files:
        filepath = os.path.join(docs_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        doc = {
            'slug': slugify(filename),
            'title': extract_title(content, filename),
            'section': section_for(filename),
            'content': content
        }
        docs.append(doc)
        print(f"  ✓ [{doc['section']}] {filename} → /docs/{doc['slug']}")

    return docs


def js_string(value):
    """Escapa un texto corto para una cadena JS entre comillas dobles."""
    return value.replace('\\', '\\\\').replace('"', '\\"')


def generate_docs_data_js(docs, output_path):
    """Genera el archivo docsData.js"""
    lines = [
        '// Archivo generado por update_docs.py a partir de ../OpenACM/docs/*.md',
        '// No lo edites a mano: edita los .md y vuelve a correr `python update_docs.py`.',
        '',
        f'export const docSections = [{", ".join(chr(34) + s + chr(34) for s in SECTIONS)}];',
        '',
        'export const docsData = [',
    ]

    for i, doc in enumerate(docs):
        content = doc['content']

        lines.append('  {')
        lines.append(f'    "slug": "{doc["slug"]}",')
        lines.append(f'    "title": "{js_string(doc["title"])}",')
        lines.append(f'    "section": "{js_string(doc["section"])}",')
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
    lines.append('')

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
