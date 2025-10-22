function Input({ className = "", ...props }) {
  const baseClasses = "border border-slate-300 outline-slate-400 px-4 py-2 rounded-md";
  const finalClasses = `${className} ${baseClasses}`.trim();
  return <input className={finalClasses} {...props} />;
}

export default Input;
