#!/bin/sh
set -e

out_dir="/Users/piercexanderj.giron/Desktop/Portfolio/public/tools"
mkdir -p "$out_dir"

create_svg() {
  name="$1"
  file="$2"
  cat <<SVG > "$out_dir/$file"
<svg width="280" height="120" viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="120" rx="28" fill="#FFFFFF"/>
  <rect x="1" y="1" width="278" height="118" rx="27" stroke="#E2E8F0" stroke-width="2"/>
  <text x="140" y="68" text-anchor="middle" font-size="24" fill="#0F172A" font-family="Arial">$name</text>
</svg>
SVG
}

create_svg "Zapier" "zapier.svg"
create_svg "Make.com" "make.svg"
create_svg "n8n" "n8n.svg"
create_svg "Airtable" "airtable.svg"
create_svg "Google Workspace" "google-workspace.svg"
create_svg "Gorgias" "gorgias.svg"
create_svg "Zoho CRM" "zoho-crm.svg"
create_svg "Calendly" "calendly.svg"
create_svg "Cal.com" "cal-com.svg"
create_svg "GoHighLevel" "gohighlevel.svg"
create_svg "ManyChat" "manychat.svg"
create_svg "Typeform" "typeform.svg"
create_svg "Google Forms" "google-forms.svg"
create_svg "Formstack" "formstack.svg"
create_svg "ClickUp" "clickup.svg"
create_svg "Slack" "slack.svg"
create_svg "Telegram" "telegram.svg"
create_svg "WhatsApp" "whatsapp.svg"
create_svg "Facebook" "facebook.svg"
create_svg "Instagram" "instagram.svg"
create_svg "LinkedIn" "linkedin.svg"
create_svg "TikTok" "tiktok.svg"
create_svg "Notion" "notion.svg"
create_svg "OpenAI" "openai.svg"
create_svg "Claude" "claude.svg"
create_svg "Grok" "grok.svg"
create_svg "Gemini" "gemini.svg"
