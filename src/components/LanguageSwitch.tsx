interface LanguageSwitchProps {
  href: string;
  isZh: boolean;
  label: string;
}

export function LanguageSwitch({ href, isZh, label }: LanguageSwitchProps) {
  return (
    <a
      href={href}
      role="switch"
      aria-checked={isZh}
      aria-label={label}
      className="relative inline-flex h-10 w-22 items-center rounded-lg border border-surface-border bg-surface p-1 text-xs font-semibold text-text-tertiary transition-colors hover:border-text-tertiary hover:bg-surface-light hover:text-foreground"
    >
      <span
        className={`absolute left-1 top-1 h-8 w-10 rounded-md bg-gradient-accent transition-transform duration-300 ${
          isZh ? "translate-x-10" : "translate-x-0"
        }`}
      />
      <span
        className={`relative z-10 flex w-10 justify-center transition-colors ${
          isZh ? "text-text-tertiary" : "text-white"
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 flex w-10 justify-center transition-colors ${
          isZh ? "text-white" : "text-text-tertiary"
        }`}
      >
        中
      </span>
    </a>
  );
}
