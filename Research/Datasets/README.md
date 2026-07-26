# Datasets

This directory stores datasets used for reproducing paper results. Each dataset should be self-contained with clear documentation.

## Structure

```
Datasets/
├── {Dataset_Name}/
│   ├── raw/                     # Original downloaded data
│   │   ├── train/               # Training split
│   │   ├── val/                 # Validation split
│   │   └── test/                # Test split
│   ├── processed/               # Preprocessed data
│   │   ├── train/               # Processed training split
│   │   ├── val/                 # Processed validation split
│   │   └── test/                # Processed test split
│   ├── scripts/                 # Data processing scripts
│   │   ├── download.py          # Download script
│   │   ├── preprocess.py        # Preprocessing script
│   │   └── split.py             # Train/val/test splitting
│   ├── README.md                # Dataset documentation
│   ├── LICENSE                  # Dataset license
│   └── .gitignore               # Ignore large files
└── README.md
```

## Dataset Documentation

Each dataset directory must include a `README.md` with:

```markdown
# {Dataset Name}

## Overview
- **Source**: [Original source URL](url)
- **License**: [License type and link](url)
- **Size**: Total size of the dataset
- **Splits**: Description of train/val/test splits

## Download

### Automatic Download
```bash
python scripts/download.py
```

### Manual Download
1. Download from [source URL](url)
2. Extract to `raw/` directory
3. Run preprocessing: `python scripts/preprocess.py`

## Preprocessing

### Steps
1. Clean text/remove noise
2. Tokenize (for NLP)
3. Normalize
4. Split into train/val/test

### Scripts
```bash
# Download and preprocess
python scripts/download.py
python scripts/preprocess.py

# Verify dataset
python scripts/verify.py
```

## Statistics

| Split | Samples | Features | Size |
|-------|---------|----------|------|
| Train | 10000   | 500      | 100MB|
| Val   | 2000    | 500      | 20MB |
| Test  | 2000    | 500      | 20MB |

## Usage

### Loading in Python
```python
from datasets import load_dataset

dataset = load_dataset("path/to/dataset")
train = dataset["train"]
val = dataset["val"]
test = dataset["test"]
```

### File Structure
```
raw/
├── train.csv
├── val.csv
└── test.csv

processed/
├── train.pt
├── val.pt
└── test.pt
```

## Citation
```bibtex
@article{dataset_author_year,
  title={Dataset Title},
  author={Author 1 and Author 2},
  journal={Journal},
  year={Year}
}
```

## Notes
- Any special considerations
- Known issues
- Differences from original dataset
```

## Dataset Types

### 1. Standard Datasets

For well-known datasets (MNIST, CIFAR, etc.):
- Just document how to download
- Use standard libraries (torchvision, datasets, etc.)
- No need to store the actual data

Example:
```markdown
# CIFAR-10

## Download
```python
from torchvision import datasets, transforms

train = datasets.CIFAR10(root='./data', train=True, download=True)
test = datasets.CIFAR10(root='./data', train=False, download=True)
```
```

### 2. Custom Datasets

For custom or less common datasets:
- Store the raw data in `raw/`
- Store processed data in `processed/`
- Include download and preprocessing scripts
- Document the source and license

### 3. Large Datasets

For large datasets (GBs+):
- Do NOT commit to Git
- Use `.gitignore` to exclude large files
- Provide download scripts
- Consider using [DVC](https://dvc.org/) for versioning

Example `.gitignore`:
```gitignore
# Ignore raw data
raw/

# Ignore processed data
processed/

# Ignore large files
*.h5
*.npy
*.npz
*.tar.gz
*.zip
```

## Data Versioning

### Using DVC

1. Initialize DVC:
   ```bash
   dvc init
   ```

2. Add data files:
   ```bash
   dvc add Datasets/{dataset_name}/raw
   ```

3. Commit to Git:
   ```bash
   git add Datasets/{dataset_name}/raw.dvc
   git commit -m "Add dataset"
   ```

4. Push to remote storage:
   ```bash
   dvc push
   ```

### Using Git LFS

For large files that must be in Git:
```bash
# Install Git LFS
git lfs install

# Track large files
git lfs track "Datasets/*/*.h5"

# Commit and push as usual
git add .gitattributes
git commit -m "Add large dataset"
git push
```

## Example Structure

```
Datasets/
├── cifar10/
│   ├── README.md
│   └── scripts/
│       └── download.py
├── custom_dataset/
│   ├── raw/
│   │   ├── train.csv
│   │   ├── val.csv
│   │   └── test.csv
│   ├── processed/
│   │   ├── train.pt
│   │   ├── val.pt
│   │   └── test.pt
│   ├── scripts/
│   │   ├── download.py
│   │   ├── preprocess.py
│   │   └── verify.py
│   ├── README.md
│   └── LICENSE
└── large_dataset/
    ├── README.md
    ├── scripts/
    │   └── download.py
    └── .gitignore
```

## Best Practices

1. **Document everything**: Source, license, preprocessing steps
2. **Keep raw data**: Always keep a copy of the original data
3. **Reproducible preprocessing**: Script all preprocessing steps
4. **Version control**: Use DVC or Git LFS for large datasets
5. **Respect licenses**: Follow dataset usage terms
6. **Standard formats**: Use common formats (CSV, JSON, HDF5, etc.)
7. **Efficient storage**: Compress large files when possible
