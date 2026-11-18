18-11-2026 15:47

Tags: [[Programming]]

# Ruff Importing a library in the middle of a .ipynb file

Colocar esse bloco de texto no `pyproject.toml` pro ruff parar de reclamar quando você importar algo no meio de um jupyter notebook file

```toml
[tool.ruff.lint.per-file-ignores]
"*.ipynb" = ["E402"]
```
