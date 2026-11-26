# Rules Index

Rules cho dự án `ies-landing-page`: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Supabase.

## Precedence (cao → thấp)

1. **Safety** — `13-no-silent-control-flow`, `17-nextjs-supabase`
2. **Output style** — `15-no-yapping` > `07-output-format`
3. **Scope** — `12-do-only-what-asked`
4. **Language** — `01-language` (áp dụng cho prose; code luôn tiếng Anh)

## Rules đang dùng

| # | File | Scope | Nội dung |
|---|---|---|---|
| 01 | `01-language.mdc` | always | Tiếng Việt cho prose, tiếng Anh cho code |
| 02 | `02-research-behavior.mdc` | always | Đọc code trước khi trả lời, hành động mặc định |
| 03 | `03-code-quality.mdc` | always | Tối giản, không over-engineering |
| 05 | `05-refactoring.mdc` | always | Đọc toàn bộ file trước, sửa phẫu thuật |
| 06 | `06-performance.mdc` | always | Đo trước, tối ưu sau (bundle, RSC, query) |
| 07 | `07-output-format.mdc` | always | Ngắn gọn, cấu trúc khi cần |
| 08 | `08-tool-usage.mdc` | always | Gọi tool song song khi độc lập |
| 12 | `12-do-only-what-asked.mdc` | always | Chỉ làm đúng yêu cầu |
| 13 | `13-no-silent-control-flow.mdc` | always | Không nuốt lỗi, không `console` debug thường trực |
| 15 | `15-no-yapping.mdc` | always | Trả lời ngắn, đủ ý |
| 17 | `17-nextjs-supabase.mdc` | always | Quy ước Next.js, Server Actions, Supabase, RLS |

## Đã chuyển sang `archive/`

Các rule cho dự án Python/ML/quant không áp dụng cho repo này: `04-scientific-ml`, `09-research-paper`, `10-tooling-uv`, `11-main-py-style`, `14-diary-logging`, `16-reference-code-readonly`.

## Cách dùng

- Đọc file này trước; các rule khác chỉ đọc khi task chạm đúng phạm vi.
- Nếu user yêu cầu trái với rule, làm theo user nhưng nêu xung đột trong câu trả lời.
