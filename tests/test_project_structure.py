import json
import os
from pathlib import Path

def test_required_directories_exist():
    """Test that all required directories exist."""
    required_dirs = ['data', 'projects', 'templates']
    for dir_name in required_dirs:
        assert os.path.isdir(dir_name), f"Directory '{dir_name}' does not exist"

def test_template_files_exist():
    """Test that all template files exist."""
    template_files = ['README.md', 'metadata.json']
    for file_name in template_files:
        assert os.path.isfile(os.path.join('templates', file_name)), \
            f"Template file '{file_name}' does not exist"

def test_project_structure():
    """Test that each project follows the required structure."""
    projects_dir = Path('projects')
    if not projects_dir.exists():
        return
        
    for project_path in projects_dir.iterdir():
        if not project_path.is_dir():
            continue
            
        # Test required files exist
        required_files = ['README.md', 'metadata.json', 'requirements.txt']
        for file_name in required_files:
            assert (project_path / file_name).is_file(), \
                f"Required file '{file_name}' missing in {project_path}"
        
        # Test metadata.json format
        with open(project_path / 'metadata.json', 'r') as f:
            metadata = json.load(f)
            required_fields = ['name', 'description', 'tags', 'authors', 'created_at']
            for field in required_fields:
                assert field in metadata, \
                    f"Required field '{field}' missing in {project_path}/metadata.json"

def test_project_index():
    """Test that the project index is valid."""
    index_path = Path('data/project_index.json')
    if not index_path.exists():
        return
        
    with open(index_path, 'r') as f:
        index = json.load(f)
        assert 'last_updated' in index, "Project index missing 'last_updated' field"
        assert 'projects' in index, "Project index missing 'projects' field"
        assert isinstance(index['projects'], list), "'projects' should be a list"
        
        for project in index['projects']:
            required_fields = ['name', 'description', 'path', 'created_at']
            for field in required_fields:
                assert field in project, \
                    f"Required field '{field}' missing in project index entry" 