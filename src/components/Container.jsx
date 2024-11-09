// src/components/Container.js
export default function Container({ children }) {
    return (
      <div className="px-4 md:px-8 lg:px-16 xl:px-24">
        {children}
      </div>
    );
}