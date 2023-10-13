export default function Toast({ isVisible, message }) {
    if (!isVisible) return null;
  
    return (
      <div 
        className="fixed bottom-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-800 text-white text-sm rounded-md z-10"
        dangerouslySetInnerHTML={{ __html: message }}
      />
    );
}