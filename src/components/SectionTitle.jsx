// Título de sección con subrayado de brasa. "dark" = para fondos oscuros.
export default function SectionTitle({ id, children, subtitle, dark = false, center = false }) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2
        id={id}
        className={`font-display text-3xl font-extrabold md:text-4xl ${dark ? "text-crema" : "text-carbon"}`}
      >
        {children}
      </h2>
      <span
        aria-hidden="true"
        className={`mt-2 block h-1 w-16 rounded-full bg-ascua ${center ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p className={`mt-3 max-w-2xl text-base ${center ? "mx-auto" : ""} ${dark ? "text-crema/85" : "text-carbon/80"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
