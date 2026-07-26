# Papers Repository

This directory stores research papers for study and reproduction. Organize papers by year and then by paper name.

## Structure

```
Papers/
├── {Year}/
│   └── {Paper_Name}/
│       ├── paper.pdf          # Original paper PDF
│       ├── metadata.yaml      # Paper metadata
│       ├── summary.md         # Paper summary and notes
│       ├── related_work.md    # Related papers and comparisons
│       └── references.bib     # BibTeX references (optional)
└── README.md
```

## Adding a New Paper

1. Create directory: `mkdir -p Papers/{Year}/{paper_name}`
2. Add the paper PDF
3. Create `metadata.yaml` with paper details
4. Write a summary in `summary.md`

## Metadata Template

```yaml
# Required fields
title: "Full Paper Title"
authors: ["First Author", "Second Author"]
venue: "Conference or Journal Name"
year: 2024

# Optional fields
arxiv_id: "2401.12345"
doi: "10.1234/abc.def"
url: "https://arxiv.org/abs/2401.12345"
pdf_url: "https://arxiv.org/pdf/2401.12345.pdf"

# Classification
tags: ["machine learning", "computer vision", "nlp"]
category: "cs.LG"  # arXiv category

# Status
status: "to_read"  # to_read, reading, read, implementing, implemented, reproduced
priority: "high"   # high, medium, low

# Notes
difficulty: "medium"  # easy, medium, hard
implementation_status: "not_started"  # not_started, in_progress, completed
reproduction_status: "not_attempted"  # not_attempted, attempted, partial, full
```

## Summary Template

Use the template from `../Templates/paper_summary.md` for consistent paper summaries.

## Status Tracking

Track your progress with papers using the `status` field in metadata:
- `to_read`: Paper downloaded but not yet read
- `reading`: Currently reading
- `read`: Finished reading, notes written
- `implementing`: Working on implementation
- `implemented`: Code implementation complete
- `reproduced`: Successfully reproduced results

## Example Directory Structure

```
Papers/
├── 2017/
│   └── attention_is_all_you_need/
│       ├── paper.pdf
│       ├── metadata.yaml
│       └── summary.md
├── 2018/
│   └── bert_pre_training/
│       ├── paper.pdf
│       ├── metadata.yaml
│       └── summary.md
└── 2023/
    └── llm_survey/
        ├── paper.pdf
        ├── metadata.yaml
        └── summary.md
```

## Tips

- Use [arXiv sanity preserver](http://www.arxiv-sanity-lite.com/) to find papers
- Use [Papers With Code](https://paperswithcode.com/) for implementations
- Use [Google Scholar](https://scholar.google.com/) for citations
- Store PDFs with consistent naming: `{year}_{first_author}_{short_title}.pdf`
