export function Logo({ className = "h-10", withText = false }: { className?: string; withText?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <img src="/pdf/mec-mark-color.png" alt="MEC · طاهي الشرق الأوسط" className={className} />
      {withText && (
        <span className="leading-tight">
          <span className="block text-sm font-bold text-ink">طاهي الشرق الأوسط</span>
          <span className="block text-[11px] text-muted">استيراد وتوزيع الأغذية المجمّدة</span>
        </span>
      )}
    </span>
  );
}

/** الشُرَط الملوّنة الثلاث فوق العناوين */
export function Dashes({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-1.5 ${className}`}>
      <span className="h-[5px] w-7 rounded-full" style={{ background: "#c8881f" }} />
      <span className="h-[5px] w-5 rounded-full" style={{ background: "#4e7a3f" }} />
      <span className="h-[5px] w-5 rounded-full" style={{ background: "#c0392b" }} />
    </span>
  );
}
