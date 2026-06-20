import React, { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import {
  Upload, Download, Share2, Eye, Shield, Lock, X,
  FlaskConical, Scan, Pill, AlertCircle, Stethoscope,
  RefreshCw, Calendar, FilePlus, Receipt, BookOpen,
  FileText, ChevronLeft, MoreVertical, ZoomIn,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

// ─── Brand ───────────────────────────────────────────────────────────────────
const B = {
  primary:     "#13B5B1",
  primaryDark: "#1E88C7",
  primaryBg:   "#EBF5FB",
  primarySoft: "#F1F7F7",
  bg:          "#F7F8FA",
  white:       "#ffffff",
  border:      "#E5EAF0",
  text:        "#0F172A",
  muted:       "#64748b",
  subtle:      "#94a3b8",
};

// ─── Types ────────────────────────────────────────────────────────────────────
type DocType = "Prescription" | "Lab Report" | "Therapy Notes" | "Consultation Summary" | "Imaging" | "Invoice" | "Nutrition Plan";
type FamilyKey = "self" | "mother" | "father" | "child";

interface HealthDoc {
  id: string;
  fileName: string;
  docType: DocType;
  isNew?: boolean;
  fileType: "PDF" | "JPG" | "PNG";
  fileSize: string;
  preview?: {
    medicines?: { name: string; dosage: string; duration: string }[];
    findings?: string[];
    notes?: string;
    lab?: string;
    testName?: string;
  };
}

interface Consultation {
  id: string;
  day: string;
  month: string;
  year: string;
  fullDate: string;
  type: "doctor" | "self";
  doctorName?: string;
  specialty?: string;
  label: string;
  patientName: string;
  isNew?: boolean;
  docs: HealthDoc[];
}

interface FamilyProfile {
  key: FamilyKey;
  name: string;
  healthContext: string;
  initial: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const familyProfiles: FamilyProfile[] = [
  { key: "self",   name: "You",    healthContext: "Active Therapy Plan",  initial: "Y" },
  { key: "mother", name: "Mother", healthContext: "Diabetes Care",         initial: "M" },
  { key: "father", name: "Father", healthContext: "Cardiology Follow-up",  initial: "F" },
  { key: "child",  name: "Child",  healthContext: "Vaccination Records",   initial: "C" },
];

const consultationsByMember: Record<FamilyKey, Consultation[]> = {
  self: [
    {
      id: "c1",
      day: "14", month: "MAY", year: "2026", fullDate: "14 May 2026",
      type: "doctor",
      doctorName: "Dr. Arjun Shah",
      specialty: "Psychiatry",
      label: "Consulted Dr. Arjun Shah for Psychiatry",
      patientName: "You",
      isNew: true,
      docs: [
        {
          id: "d1", fileName: "Dr_Shah_Prescription_May2026.pdf", docType: "Prescription",
          isNew: true, fileType: "PDF", fileSize: "245 KB",
          preview: {
            medicines: [
              { name: "Escitalopram 10mg", dosage: "1 tablet every morning", duration: "30 days" },
              { name: "Clonazepam 0.5mg", dosage: "As needed, max twice daily", duration: "15 days" },
            ],
            notes: "Patient responding well. Continue current dosage. Follow up in 4 weeks.",
          },
        },
        {
          id: "d2", fileName: "Consultation_Summary_May2026.pdf", docType: "Consultation Summary",
          isNew: true, fileType: "PDF", fileSize: "190 KB",
          preview: {
            notes: "Reduced anxiety frequency noted. Sleep quality improved. Escitalopram continued. Daily journaling exercise recommended.",
          },
        },
      ],
    },
    {
      id: "c2",
      day: "13", month: "MAY", year: "2026", fullDate: "13 May 2026",
      type: "doctor",
      doctorName: "Dr. Meera Sharma",
      specialty: "Therapy",
      label: "Therapy Session with Dr. Meera Sharma",
      patientName: "You",
      isNew: true,
      docs: [
        {
          id: "d3", fileName: "Anxiety_Therapy_Session_3.pdf", docType: "Therapy Notes",
          isNew: true, fileType: "PDF", fileSize: "320 KB",
          preview: {
            notes: "Session focused on CBT techniques for automatic negative thoughts. Patient practiced cognitive reframing. Homework: 5-min thought record daily.",
          },
        },
      ],
    },
    {
      id: "c3",
      day: "06", month: "MAY", year: "2026", fullDate: "6 May 2026",
      type: "doctor",
      doctorName: "Dr. Riya Kapoor",
      specialty: "Nutrition",
      label: "Nutrition Consultation with Dr. Riya Kapoor",
      patientName: "You",
      docs: [
        {
          id: "d4", fileName: "Nutrition_Plan_May2026.pdf", docType: "Nutrition Plan",
          fileType: "PDF", fileSize: "410 KB",
          preview: {
            notes: "7-day structured meal plan focusing on anti-inflammatory foods. Iron-rich diet advised based on CBC results. Avoid processed sugar.",
          },
        },
      ],
    },
    {
      id: "c4",
      day: "28", month: "APR", year: "2026", fullDate: "28 Apr 2026",
      type: "self",
      label: "Uploaded by You",
      patientName: "You",
      docs: [
        {
          id: "d5", fileName: "CBC_Blood_Report_Apr2026.pdf", docType: "Lab Report",
          fileType: "PDF", fileSize: "1.2 MB",
          preview: {
            lab: "Thyrocare Diagnostics, Mumbai",
            testName: "Complete Blood Count (CBC)",
            findings: [
              "Hemoglobin: 10.8 g/dL — Below normal range",
              "Vitamin B12: 180 pg/mL — Below normal range",
            ],
            notes: "2 values outside reference range. Review with your physician.",
          },
        },
        {
          id: "d6", fileName: "MRI_Lumbar_Spine.jpg", docType: "Imaging",
          fileType: "JPG", fileSize: "4.8 MB",
          preview: { notes: "Lumbar spine MRI. External scan uploaded for reference during consultations." },
        },
      ],
    },
    {
      id: "c5",
      day: "08", month: "MAY", year: "2026", fullDate: "8 May 2026",
      type: "self",
      label: "Uploaded by You",
      patientName: "You",
      docs: [
        {
          id: "d7", fileName: "Vitamin_D_Test_Report.pdf", docType: "Lab Report",
          fileType: "PDF", fileSize: "540 KB",
          preview: {
            lab: "Metropolis Healthcare, Delhi",
            testName: "Vitamin D (25-OH)",
            findings: ["Vitamin D: 14 ng/mL — Significant deficiency (Normal: >30 ng/mL)"],
            notes: "Deficiency noted. Supplementation and dietary adjustment recommended.",
          },
        },
      ],
    },
  ],
  mother: [
    {
      id: "m1",
      day: "20", month: "APR", year: "2026", fullDate: "20 Apr 2026",
      type: "self",
      label: "Uploaded by You",
      patientName: "Mother",
      docs: [
        {
          id: "m_d1", fileName: "Diabetes_Lab_Report_Apr2026.pdf", docType: "Lab Report",
          fileType: "PDF", fileSize: "890 KB",
          preview: {
            lab: "SRL Diagnostics, Bangalore",
            testName: "HbA1c & Fasting Glucose",
            findings: [
              "HbA1c: 7.9% — Above target range (Normal: <7%)",
              "Fasting Glucose: 142 mg/dL — Elevated",
            ],
            notes: "Review with endocrinologist recommended.",
          },
        },
      ],
    },
  ],
  father: [],
  child: [],
};

// ─── Doc type config ──────────────────────────────────────────────────────────
const docTypeIcon: Record<DocType, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  "Prescription":         Pill,
  "Lab Report":           FlaskConical,
  "Therapy Notes":        BookOpen,
  "Consultation Summary": FileText,
  "Imaging":              Scan,
  "Invoice":              Receipt,
  "Nutrition Plan":       FilePlus,
};

const docTypeColor: Record<DocType, { color: string; bg: string; border: string }> = {
  "Prescription":         { color: "#13B5B1", bg: "#EBF5FB", border: "#BFDFEF" },
  "Lab Report":           { color: "#B45309", bg: "#FEF3C7", border: "#FDE68A" },
  "Therapy Notes":        { color: "#475569", bg: "#F1F4F8", border: "#CBD5E1" },
  "Consultation Summary": { color: "#0E7490", bg: "#ECFEFF", border: "#A5F3FC" },
  "Imaging":              { color: "#374151", bg: "#F3F4F6", border: "#D1D5DB" },
  "Invoice":              { color: "#B91C1C", bg: "#FEF2F2", border: "#FECACA" },
  "Nutrition Plan":       { color: "#065F46", bg: "#ECFDF5", border: "#A7F3D0" },
};

function docSummary(docs: HealthDoc[]) {
  const counts: Partial<Record<DocType, number>> = {};
  docs.forEach((d) => { counts[d.docType] = (counts[d.docType] || 0) + 1; });
  return Object.entries(counts)
    .map(([type, count]) => `${count} ${type}${(count as number) > 1 ? "s" : ""}`)
    .join(", ");
}

// ─── Prescription Thumbnail ────────────────────────────────────────────────────
function PrescriptionThumbnail({ doc }: { doc: HealthDoc }) {
  const meds = doc.preview?.medicines || [];
  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col" style={{ border: "1px solid #E5EAF0" }}>
      {/* Header */}
      <div className="px-2.5 py-2 flex items-center justify-between flex-shrink-0" style={{ backgroundColor: B.primary }}>
        <div>
          <div className="text-white text-[8px] font-bold tracking-wide">MANTRA CARE</div>
          <div className="text-white/70 text-[6px]">Health Records</div>
        </div>
        <div className="text-right">
          <div className="text-white text-[7px] font-medium">Dr. Arjun Shah</div>
          <div className="text-white/70 text-[6px]">Psychiatrist · Reg. MH-92341</div>
        </div>
      </div>
      {/* Body */}
      <div className="flex-1 px-2.5 py-2 text-[7px] leading-relaxed overflow-hidden" style={{ color: B.text }}>
        <div className="flex justify-between mb-1.5" style={{ color: B.muted }}>
          <span>You · 28y, Male</span>
          <span>14 May 2026</span>
        </div>
        <div className="border-t pt-1.5 mt-1" style={{ borderColor: B.border }}>
          <div className="font-bold mb-1" style={{ color: B.primary }}>Rx</div>
          {meds.slice(0, 3).map((m, i) => (
            <div key={i} className="mb-0.5">
              <span className="font-medium">{i + 1}. {m.name}</span>
              <div style={{ color: B.muted }} className="pl-2">{m.dosage} · {m.duration}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer line */}
      <div className="px-2.5 py-1 flex-shrink-0 text-[6px]" style={{ backgroundColor: B.bg, color: B.subtle, borderTop: `1px solid ${B.border}` }}>
        Digitally verified · Mantra Care
      </div>
    </div>
  );
}

// ─── Lab Report Thumbnail ─────────────────────────────────────────────────────
function LabThumbnail({ doc }: { doc: HealthDoc }) {
  const findings = doc.preview?.findings || [];
  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col" style={{ border: "1px solid #E5EAF0" }}>
      <div className="px-2.5 py-2 flex-shrink-0" style={{ backgroundColor: "#FFFBEB", borderBottom: "1px solid #FDE68A" }}>
        <div className="text-[8px] font-bold text-amber-800">{doc.preview?.lab || "Diagnostic Lab"}</div>
        <div className="text-[6px] text-amber-600 mt-0.5">{doc.preview?.testName || "Lab Report"}</div>
      </div>
      <div className="flex-1 px-2.5 py-2 overflow-hidden text-[7px]">
        {findings.slice(0, 3).map((f, i) => (
          <div key={i} className="flex items-start gap-1 mb-1">
            <div className="w-1 h-1 rounded-full bg-amber-500 flex-shrink-0 mt-1" />
            <span style={{ color: B.text }}>{f.split("—")[0].trim()}</span>
          </div>
        ))}
        {findings.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <FlaskConical className="w-6 h-6 text-amber-300" />
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Generic Doc Thumbnail ────────────────────────────────────────────────────
function GenericThumbnail({ doc }: { doc: HealthDoc }) {
  const TypeIcon = docTypeIcon[doc.docType];
  const cfg = docTypeColor[doc.docType];
  return (
    <div
      className="w-full h-full rounded-lg flex flex-col items-center justify-center gap-2 p-4"
      style={{ backgroundColor: cfg.bg, border: `1px solid ${cfg.border}` }}
    >
      <TypeIcon className="w-10 h-10 opacity-60" style={{ color: cfg.color }} />
      <div className="text-center">
        <div className="text-[8px] font-semibold" style={{ color: cfg.color }}>{doc.docType}</div>
        <div className="text-[7px] mt-0.5 font-mono" style={{ color: B.subtle }}>{doc.fileType}</div>
      </div>
    </div>
  );
}

function DocThumbnail({ doc }: { doc: HealthDoc }) {
  if (doc.docType === "Prescription") return <PrescriptionThumbnail doc={doc} />;
  if (doc.docType === "Lab Report") return <LabThumbnail doc={doc} />;
  return <GenericThumbnail doc={doc} />;
}

// ─── View Modal ───────────────────────────────────────────────────────────────
function ViewModal({ doc, onClose }: { doc: HealthDoc; onClose: () => void }) {
  const TypeIcon = docTypeIcon[doc.docType];
  const cfg = docTypeColor[doc.docType];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.16 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(15,23,42,0.5)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.97, opacity: 0, y: 10 }}
        animate={{ scale: 1,    opacity: 1, y: 0  }}
        exit={{    scale: 0.97, opacity: 0, y: 10 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[88vh] flex flex-col overflow-hidden"
        style={{ border: `1px solid ${B.border}` }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4" style={{ borderBottom: `1px solid ${B.border}` }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: cfg.bg, border: `1px solid ${cfg.border}` }}>
            <TypeIcon className="w-4 h-4" style={{ color: cfg.color }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate" style={{ color: B.text }}>{doc.fileName}</p>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs font-medium px-1.5 py-0.5 rounded" style={{ backgroundColor: cfg.bg, color: cfg.color }}>{doc.docType}</span>
              <span className="text-xs" style={{ color: B.subtle }}>{doc.fileSize}</span>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors flex-shrink-0" style={{ color: B.muted }}>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto">
          {/* Large doc preview */}
          <div className="mx-6 mt-5 h-52 rounded-xl overflow-hidden">
            <DocThumbnail doc={doc} />
          </div>

          {/* Medicines */}
          {doc.preview?.medicines && (
            <div className="px-6 mt-5">
              <div className="flex items-center gap-2 mb-3">
                <Pill className="w-4 h-4" style={{ color: B.primary }} />
                <p className="text-sm font-semibold" style={{ color: B.text }}>Medications Prescribed</p>
              </div>
              <div className="space-y-2">
                {doc.preview.medicines.map((med, i) => (
                  <div key={i} className="flex items-start gap-3 px-4 py-3 rounded-xl" style={{ backgroundColor: B.bg, border: `1px solid ${B.border}` }}>
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5" style={{ backgroundColor: B.primaryBg, color: B.primary }}>{i + 1}</div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: B.text }}>{med.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: B.muted }}>{med.dosage} · {med.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lab findings */}
          {doc.preview?.findings && (
            <div className="px-6 mt-5">
              <div className="flex items-center gap-2 mb-1">
                <FlaskConical className="w-4 h-4 text-amber-600" />
                <p className="text-sm font-semibold" style={{ color: B.text }}>{doc.preview.testName || "Findings"}</p>
              </div>
              {doc.preview.lab && <p className="text-xs mb-3" style={{ color: B.subtle }}>{doc.preview.lab}</p>}
              <div className="space-y-2">
                {doc.preview.findings.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-amber-50 border border-amber-100">
                    <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-amber-900">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notes */}
          {doc.preview?.notes && (
            <div className="px-6 mt-5">
              <p className="text-xs mb-2" style={{ color: B.subtle }}>Doctor's Notes</p>
              <div className="px-4 py-3.5 rounded-xl text-sm leading-relaxed" style={{ backgroundColor: B.bg, border: `1px solid ${B.border}`, color: B.text }}>
                {doc.preview.notes}
              </div>
            </div>
          )}

          <div className="h-6" />
        </div>

        {/* Footer */}
        <div className="px-6 py-4 flex items-center justify-end gap-2" style={{ borderTop: `1px solid ${B.border}`, backgroundColor: B.bg }}>
          <button className="flex items-center gap-1.5 h-9 px-4 rounded-lg border text-sm font-medium hover:bg-white transition-colors" style={{ borderColor: B.border, color: B.muted }}>
            <Share2 className="w-3.5 h-3.5" /> Share
          </button>
          <button
            className="flex items-center gap-1.5 h-9 px-4 rounded-lg text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: B.primary }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = B.primaryDark)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = B.primary)}
          >
            <Download className="w-3.5 h-3.5" /> Download
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Consultation drill-in view ───────────────────────────────────────────────
function ConsultationView({ consult, patientName, onBack, onViewDoc }: {
  consult: Consultation;
  patientName: string;
  onBack: () => void;
  onViewDoc: (doc: HealthDoc) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.18 }}
    >
      {/* Sub-header */}
      <div className="flex items-start justify-between gap-4 mb-5 pb-4" style={{ borderBottom: `1px solid ${B.border}` }}>
        <div className="flex items-start gap-3">
          <button
            onClick={onBack}
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 hover:bg-slate-100 transition-colors"
            style={{ color: B.muted, border: `1px solid ${B.border}` }}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div>
            <p className="text-xs font-medium mb-0.5" style={{ color: B.subtle }}>
              {consult.day} {consult.month} {consult.year}
            </p>
            <p className="text-base font-semibold" style={{ color: B.text }}>{consult.label}</p>
            <p className="text-sm mt-0.5" style={{ color: B.muted }}>
              {consult.type === "doctor"
                ? `${consult.doctorName} shared ${consult.docs.length} record${consult.docs.length !== 1 ? "s" : ""} for ${patientName}`
                : `${consult.docs.length} record${consult.docs.length !== 1 ? "s" : ""} uploaded for ${patientName}`}
            </p>
          </div>
        </div>
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors flex-shrink-0" style={{ color: B.subtle }}>
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {/* Document cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {consult.docs.map((doc) => {
          const cfg = docTypeColor[doc.docType];
          return (
            <div
              key={doc.id}
              className="bg-white rounded-xl overflow-hidden transition-all hover:shadow-md cursor-pointer group"
              style={{ border: `1px solid ${B.border}` }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between px-3 py-2.5" style={{ borderBottom: `1px solid ${B.border}` }}>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-medium" style={{ color: B.text }}>{doc.docType}</span>
                  {doc.isNew && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-100">New</span>
                  )}
                </div>
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="w-6 h-6 rounded flex items-center justify-center hover:bg-slate-100 transition-colors"
                  style={{ color: B.subtle }}
                >
                  <MoreVertical className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Thumbnail */}
              <div
                className="h-44 p-2 relative"
                onClick={() => onViewDoc(doc)}
                style={{ backgroundColor: B.bg }}
              >
                <DocThumbnail doc={doc} />
                {/* Hover overlay */}
                <div className="absolute inset-2 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: "rgba(15,23,42,0.35)" }}>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-[10px] font-medium">View</span>
                  </div>
                </div>
              </div>

              {/* Card footer */}
              <div className="flex items-center justify-between px-3 py-2" style={{ borderTop: `1px solid ${B.border}` }}>
                <span className="text-xs" style={{ color: B.subtle }}>{doc.fileSize}</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onViewDoc(doc)}
                    className="w-6 h-6 rounded flex items-center justify-center hover:bg-slate-100 transition-colors"
                    style={{ color: B.muted }}
                    title="View"
                  >
                    <Eye className="w-3 h-3" />
                  </button>
                  <button
                    className="w-6 h-6 rounded flex items-center justify-center hover:bg-slate-100 transition-colors"
                    style={{ color: B.muted }}
                    title="Download"
                  >
                    <Download className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ─── Timeline list view ───────────────────────────────────────────────────────
function TimelineView({ consultations, onSelect }: {
  consultations: Consultation[];
  onSelect: (c: Consultation) => void;
}) {
  // Group by year
  const byYear: Record<string, Consultation[]> = {};
  consultations.forEach((c) => {
    (byYear[c.year] = byYear[c.year] || []).push(c);
  });

  if (consultations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: B.bg }}>
          <FileText className="w-7 h-7" style={{ color: B.subtle }} />
        </div>
        <p className="text-sm font-medium" style={{ color: B.muted }}>No health records yet</p>
        <p className="text-xs mt-1" style={{ color: B.subtle }}>Upload records or they'll appear here after your consultations.</p>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }}>
      {Object.entries(byYear).sort(([a], [b]) => Number(b) - Number(a)).map(([year, consults]) => (
        <div key={year} className="mb-2">
          {/* Year label */}
          <div className="px-1 py-2 mb-1">
            <span className="text-xs font-semibold" style={{ color: B.subtle }}>{year}</span>
          </div>

          {/* Consultation rows */}
          <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${B.border}` }}>
            {consults.sort((a, b) => b.day.localeCompare(a.day)).map((c, idx) => (
              <div
                key={c.id}
                onClick={() => onSelect(c)}
                className="flex items-center gap-4 px-5 py-4 cursor-pointer transition-colors hover:bg-slate-50 group"
                style={{ borderTop: idx > 0 ? `1px solid ${B.border}` : undefined }}
              >
                {/* Date block */}
                <div className="flex-shrink-0 text-center w-10">
                  <div className="text-lg font-bold leading-none" style={{ color: B.text }}>{c.day}</div>
                  <div className="text-[10px] font-semibold mt-0.5 tracking-wide" style={{ color: B.muted }}>{c.month}</div>
                </div>

                {/* Divider */}
                <div className="w-px h-10 flex-shrink-0" style={{ backgroundColor: B.border }} />

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    {c.isNew && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-100 flex-shrink-0">New</span>
                    )}
                    {c.type === "self" && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0" style={{ backgroundColor: B.primaryBg, color: B.primary }}>Uploaded</span>
                    )}
                    <p className="text-sm font-medium truncate" style={{ color: B.text }}>{c.label}</p>
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: B.subtle }}>Records for {c.patientName}</p>
                </div>

                {/* Doc summary */}
                <div className="flex-shrink-0 text-right hidden sm:block">
                  <p className="text-xs" style={{ color: B.primary }}>{docSummary(c.docs)}</p>
                </div>

                {/* Three-dot */}
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all hover:bg-slate-100"
                  style={{ color: B.subtle }}
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export function MyDocuments() {
  const [activeMember, setActiveMember]     = useState<FamilyKey>("self");
  const [activeConsult, setActiveConsult]   = useState<Consultation | null>(null);
  const [viewDoc, setViewDoc]               = useState<HealthDoc | null>(null);

  const consultations = consultationsByMember[activeMember];
  const profile = familyProfiles.find((f) => f.key === activeMember)!;

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: B.bg }}>
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <MobileNav />

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1000px] mx-auto px-6 py-7 space-y-6">

            {/* ── HEADER ────────────────────────────────────────────── */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h1 className="text-[22px] font-semibold tracking-tight" style={{ color: B.text }}>
                  Health Records
                </h1>
                <p className="text-sm mt-0.5" style={{ color: B.muted }}>
                  Your prescriptions, reports, and care history securely in one place.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    { icon: Lock,      label: "AES-256 Encrypted" },
                    { icon: Shield,    label: "HIPAA Compliant" },
                    { icon: RefreshCw, label: "Synced with Mantra Doctors" },
                  ].map(({ icon: Icon, label }) => (
                    <span key={label} className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-white" style={{ border: `1px solid ${B.border}`, color: B.muted }}>
                      <Icon className="w-3 h-3" style={{ color: B.primary }} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
              <Button className="flex-shrink-0 flex items-center gap-2 text-sm h-9 px-4 text-white" style={{ backgroundColor: B.primary }}>
                <Upload className="w-4 h-4" />
                Upload Records
              </Button>
            </div>

            {/* ── FAMILY SWITCHER ───────────────────────────────────── */}
            <div className="flex gap-2 flex-wrap">
              {familyProfiles.map((fp) => {
                const active = activeMember === fp.key;
                return (
                  <button
                    key={fp.key}
                    onClick={() => { setActiveMember(fp.key); setActiveConsult(null); }}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white transition-all"
                    style={{
                      border: `1px solid ${active ? B.primary : B.border}`,
                      boxShadow: active ? `0 0 0 3px ${B.primaryBg}` : "none",
                    }}
                  >
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                      style={{ backgroundColor: active ? B.primary : B.primaryBg, color: active ? "white" : B.primary }}>
                      {fp.initial}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium leading-tight" style={{ color: B.text }}>{fp.name}</p>
                      <p className="text-[10px] leading-tight mt-0.5" style={{ color: B.subtle }}>{fp.healthContext}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ── CONTENT AREA ─────────────────────────────────────── */}
            <AnimatePresence mode="wait">
              {activeConsult ? (
                <ConsultationView
                  key={activeConsult.id}
                  consult={activeConsult}
                  patientName={profile.name}
                  onBack={() => setActiveConsult(null)}
                  onViewDoc={(doc) => setViewDoc(doc)}
                />
              ) : (
                <TimelineView
                  key={activeMember}
                  consultations={consultations}
                  onSelect={setActiveConsult}
                />
              )}
            </AnimatePresence>

            <div className="h-4" />
          </div>
        </div>
      </div>

      {/* ── VIEW MODAL ───────────────────────────────────────────── */}
      <AnimatePresence>
        {viewDoc && <ViewModal doc={viewDoc} onClose={() => setViewDoc(null)} />}
      </AnimatePresence>
    </div>
  );
}
