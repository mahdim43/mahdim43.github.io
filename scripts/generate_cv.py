from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "mahdi-hooshmand-cv.pdf"

INK = colors.HexColor("#0B0E10")
SURFACE = colors.HexColor("#151B20")
COPPER = colors.HexColor("#B87C35")
MUTED = colors.HexColor("#59656B")
LIGHT = colors.HexColor("#E8E2D8")
LINE = colors.HexColor("#CBD0D2")


def page_chrome(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(INK)
    canvas.rect(0, height - 19 * mm, width, 19 * mm, fill=1, stroke=0)
    canvas.setFillColor(COPPER)
    canvas.rect(18 * mm, height - 19 * mm, 34 * mm, 1.2 * mm, fill=1, stroke=0)
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 10 * mm, "MAHDI HOOSHMAND / SYSTEMS & INFRASTRUCTURE")
    canvas.drawRightString(width - 18 * mm, 10 * mm, f"{doc.page:02d}")
    canvas.restoreState()


def bullet(text, styles):
    return Table(
        [[Paragraph("◆", styles["BulletMark"]), Paragraph(text, styles["BodySmall"])]],
        colWidths=[5 * mm, 165 * mm],
        style=TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 1),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ]),
    )


def role(period, company, title, summary, bullets, skills, styles):
    block = [
        Table(
            [[Paragraph(period, styles["Data"]), Paragraph(company, styles["Company"])]],
            colWidths=[42 * mm, 128 * mm],
            style=TableStyle([
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
            ]),
        ),
        Paragraph(title, styles["Role"]),
        Paragraph(summary, styles["BodySmall"]),
        Spacer(1, 2 * mm),
    ]
    block.extend(bullet(item, styles) for item in bullets)
    block.extend([
        Spacer(1, 1.5 * mm),
        Paragraph(skills, styles["Tags"]),
        Spacer(1, 5 * mm),
    ])
    return KeepTogether(block)


def build_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=25 * mm,
        bottomMargin=17 * mm,
        title="Mahdi Hooshmand - Systems & Infrastructure Specialist",
        author="Mahdi Hooshmand",
        subject="Anonymized professional CV",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
    doc.addPageTemplates([PageTemplate(id="cv", frames=[frame], onPage=page_chrome)])

    base = getSampleStyleSheet()
    styles = {
        "Name": ParagraphStyle("Name", parent=base["Title"], fontName="Helvetica-Bold", fontSize=25, leading=28, textColor=INK, alignment=TA_LEFT, spaceAfter=2 * mm),
        "Title": ParagraphStyle("Title", parent=base["Normal"], fontName="Helvetica", fontSize=11, leading=14, textColor=COPPER, tracking=0.8),
        "Contact": ParagraphStyle("Contact", parent=base["Normal"], fontName="Helvetica", fontSize=7.8, leading=12, textColor=MUTED, alignment=TA_RIGHT),
        "Section": ParagraphStyle("Section", parent=base["Heading2"], fontName="Helvetica-Bold", fontSize=9, leading=11, textColor=COPPER, tracking=1.2, spaceBefore=3 * mm, spaceAfter=2.5 * mm),
        "Body": ParagraphStyle("Body", parent=base["BodyText"], fontName="Helvetica", fontSize=9, leading=13.5, textColor=SURFACE),
        "BodySmall": ParagraphStyle("BodySmall", parent=base["BodyText"], fontName="Helvetica", fontSize=8.2, leading=11.5, textColor=MUTED),
        "Data": ParagraphStyle("Data", parent=base["Normal"], fontName="Courier", fontSize=7.5, leading=10, textColor=COPPER),
        "Company": ParagraphStyle("Company", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=8, leading=10, textColor=MUTED),
        "Role": ParagraphStyle("Role", parent=base["Heading3"], fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=INK, spaceAfter=1.2 * mm),
        "Tags": ParagraphStyle("Tags", parent=base["Normal"], fontName="Courier", fontSize=7, leading=10, textColor=MUTED),
        "BulletMark": ParagraphStyle("BulletMark", parent=base["Normal"], fontName="Helvetica", fontSize=5, leading=10, textColor=COPPER),
        "Metric": ParagraphStyle("Metric", parent=base["Normal"], fontName="Helvetica-Bold", fontSize=17, leading=19, textColor=INK),
        "MetricLabel": ParagraphStyle("MetricLabel", parent=base["Normal"], fontName="Helvetica", fontSize=7, leading=9, textColor=MUTED),
    }

    story = []
    header = Table(
        [[
            [Paragraph("MAHDI HOOSHMAND", styles["Name"]), Paragraph("SYSTEMS &amp; INFRASTRUCTURE SPECIALIST", styles["Title"])],
            Paragraph(
                "Mashhad, Iran / Remote<br/>+98 936 826 5361<br/>hooshmandm43@gmail.com<br/>github.com/mahdim43<br/>linkedin.com/in/mahdi-hooshmand",
                styles["Contact"],
            ),
        ]],
        colWidths=[108 * mm, 62 * mm],
        style=TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ]),
    )
    story.extend([header, Spacer(1, 5 * mm), HRFlowable(width="100%", thickness=.7, color=LINE), Paragraph("PROFILE", styles["Section"])])
    story.append(Paragraph(
        "Systems and IT infrastructure specialist with experience spanning operational roles since 2019. Works across networking, Linux and Windows systems, VMware, VoIP, Odoo ERP, databases, and support automation. Known for tracing problems across layers, finding root causes, and translating operational needs into systems that are stable and practical to maintain.",
        styles["Body"],
    ))
    story.append(Spacer(1, 4 * mm))

    metrics = [
        ("~500", "users in largest ERP environment"),
        ("200+", "hosted call-center environments"),
        ("20+", "Linux and Windows servers"),
        ("6-7", "complex daily support cases"),
    ]
    metric_table = Table(
        [
            [Paragraph(value, styles["Metric"]) for value, _ in metrics],
            [Paragraph(label, styles["MetricLabel"]) for _, label in metrics],
        ],
        colWidths=[42.5 * mm] * 4,
        style=TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("BOX", (0, 0), (-1, -1), .5, LINE),
            ("INNERGRID", (0, 0), (-1, -1), .5, LINE),
            ("LEFTPADDING", (0, 0), (-1, -1), 3 * mm),
            ("RIGHTPADDING", (0, 0), (-1, -1), 2 * mm),
            ("TOPPADDING", (0, 0), (-1, 0), 2.5 * mm),
            ("BOTTOMPADDING", (0, 0), (-1, 0), 1 * mm),
            ("TOPPADDING", (0, 1), (-1, 1), 0),
            ("BOTTOMPADDING", (0, 1), (-1, 1), 2.5 * mm),
        ]),
    )
    story.extend([metric_table, Paragraph("EXPERIENCE", styles["Section"])])

    story.append(role(
        "APR 2024 - OCT 2025",
        "ERP SOLUTIONS PROVIDER / ANONYMIZED",
        "Software Support & Odoo Specialist",
        "Owned support, customization, and user guidance across multiple Odoo customer environments.",
        [
            "Customized Inventory, Sales, Purchase, Accounting, CRM, forms, reports, automations, and access controls using Odoo Studio.",
            "Designed a two-stage warehouse transfer approval without the custom module initially expected.",
            "Supported deployments from small teams to a business-critical environment of approximately 500 users while handling 6-7 complex cases per day.",
        ],
        "ODOO 15/17  /  ODOO STUDIO  /  SQL  /  ERP SUPPORT",
        styles,
    ))
    story.append(role(
        "JUN 2023 - MAR 2024",
        "FINANCIAL SOFTWARE PROVIDER / ANONYMIZED",
        "Technical Support Specialist",
        "Diagnosed financial software, Windows, and SQL Server issues across customer environments.",
        [
            "Used database queries and structured cross-layer troubleshooting to pursue durable fixes.",
            "Automated repetitive workstation setup with Windows Batch and Registry files, reducing manual work for the support team.",
        ],
        "SQL SERVER  /  WINDOWS  /  BATCH  /  REGISTRY",
        styles,
    ))
    story.append(role(
        "JAN 2020 - JUL 2021",
        "CLOUD COMMUNICATIONS PROVIDER / ANONYMIZED",
        "VoIP & Network Support Specialist",
        "Maintained the infrastructure behind a hosted call-center platform and supported business VoIP deployments.",
        [
            "Supported more than 20 Linux and Windows servers and over 200 customer environments on VMware.",
            "Configured Asterisk, Issabel, SIP trunks, IVR, call queues, and Grandstream equipment.",
            "Traced network and voice issues across MikroTik, Cisco, VMware, and telephony layers.",
        ],
        "ASTERISK  /  ISSABEL  /  VMWARE  /  MIKROTIK  /  CISCO",
        styles,
    ))
    story.append(role(
        "NOV 2019 - JUL 2020",
        "IT SERVICES COMPANY / ANONYMIZED",
        "IT Helpdesk",
        "Supported users across Windows systems, hardware, software, and network connectivity.",
        [
            "Diagnosed issues from individual workstations through shared infrastructure services.",
            "Assisted with system installation, configuration, and maintenance.",
        ],
        "WINDOWS  /  NETWORKING  /  IT SUPPORT",
        styles,
    ))

    story.append(Paragraph("SELECTED INFRASTRUCTURE WORK", styles["Section"]))
    project_rows = [
        ("ERP OPERATIONS", "Two-stage warehouse approval in Odoo Studio", "Delivered sender/receiver controls without a custom module in an environment portfolio that included approximately 500 users."),
        ("VOICE PLATFORM", "Cloud call-center infrastructure", "Supported VMware and Asterisk infrastructure serving more than 200 isolated customer environments."),
        ("VIRTUALIZATION", "Physical-to-virtual consolidation", "Consolidated workloads from approximately six physical servers into around eight VMware ESXi virtual machines."),
    ]
    work_table = Table(
        [[Paragraph(a, styles["Data"]), Paragraph(f"<b>{b}</b><br/>{c}", styles["BodySmall"])] for a, b, c in project_rows],
        colWidths=[36 * mm, 134 * mm],
        style=TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LINEBELOW", (0, 0), (-1, -2), .5, LINE),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 2 * mm),
            ("TOPPADDING", (0, 0), (-1, -1), 3 * mm),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 3 * mm),
        ]),
    )
    story.append(work_table)

    story.append(Paragraph("TECHNICAL CAPABILITIES", styles["Section"]))
    skills = [
        ("SYSTEMS", "Linux, Windows Server, VMware ESXi, Docker, virtual machines, system administration"),
        ("NETWORK", "MikroTik, Cisco, VLAN, NAT, firewall, VPN, LAN/WAN, troubleshooting"),
        ("VOICE", "Asterisk, Issabel, SIP, IVR, call queues, Grandstream, FXO/FXS"),
        ("ERP", "Odoo 15/17, Odoo Studio, CRM, Inventory, Sales, Purchase, Accounting, access control"),
        ("TOOLS", "SQL Server, SQL, Git, Batch, Registry, REST APIs, AI-assisted development"),
    ]
    skill_table = Table(
        [[Paragraph(a, styles["Data"]), Paragraph(b, styles["BodySmall"])] for a, b in skills],
        colWidths=[27 * mm, 143 * mm],
        style=TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 1.5 * mm),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5 * mm),
        ]),
    )
    story.append(skill_table)

    story.append(Paragraph("INDEPENDENT PROJECTS", styles["Section"]))
    story.append(bullet("<b>VideoNest</b> - Self-hosted video library using Go, React, TypeScript, SQLite, FFmpeg, Docker, and Nginx. github.com/mahdim43/videonest-go", styles))
    story.append(bullet("<b>Idea Expander</b> - Bilingual, collaborative AI workflow for structured ideation, ranking, and red-team review. github.com/mahdim43/idea-expander", styles))

    story.append(Paragraph("EDUCATION & CREDENTIALS", styles["Section"]))
    credentials = Table(
        [[
            Paragraph("<b>Associate Degree in Software Engineering</b><br/>Islamic Azad University, Mashhad / 2021-2023", styles["BodySmall"]),
            Paragraph("<b>MTCNA</b><br/>MikroTik Certified Network Associate", styles["BodySmall"]),
            Paragraph("<b>Languages</b><br/>Persian / Native<br/>English / B2+", styles["BodySmall"]),
        ]],
        colWidths=[70 * mm, 58 * mm, 42 * mm],
        style=TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("BOX", (0, 0), (-1, -1), .5, LINE),
            ("INNERGRID", (0, 0), (-1, -1), .5, LINE),
            ("LEFTPADDING", (0, 0), (-1, -1), 3 * mm),
            ("RIGHTPADDING", (0, 0), (-1, -1), 3 * mm),
            ("TOPPADDING", (0, 0), (-1, -1), 3 * mm),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 3 * mm),
        ]),
    )
    story.append(credentials)

    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build_pdf()
