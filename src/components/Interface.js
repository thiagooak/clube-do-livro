import StorageTextArea from "@/components/StorageTextArea";

export function Exercise({ name, children }) {
  return (
    <div className="">
      <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
        Exercício: {name}
      </h2>
      {children}
    </div>
  );
}

export function Divider() {
  return (
    <div className="relative p-8">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
    </div>
  );
}

export function Chapter({ name, children }) {
  return (
    <div className="">
      <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
        {name}
      </h2>
      {children}
      <StorageTextArea
        storageKey={name}
        question="Adicione suas anotações aqui"
      ></StorageTextArea>
    </div>
  );
}

export function ChapterQuote({ author, children }) {
  return (
    <div>
      <div className="italic p-4 text-justify">
        {children}
        <div className="not-italic text-sm font-bold mt-2">{author}</div>
      </div>
    </div>
  );
}

export function QuoteContainer({ children }) {
  return <div className="md:flex md:space-x-3">{children}</div>;
}

export function Quote({ author, children, variant = "primary" }) {
  return (
    <div>
      <div
        className={
          "px-4 py-3 mr-2 " + (variant === "primary" ? " text-2xl" : " ")
        }
      >
        {children}
        <div className="not-italic text-sm font-bold mt-2">{author}</div>
      </div>
    </div>
  );
}
