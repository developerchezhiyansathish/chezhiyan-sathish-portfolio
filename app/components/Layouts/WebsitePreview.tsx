"use client";

interface WebsitePreviewProps {
  url: string;
}

export default function WebsitePreview({ url }: WebsitePreviewProps) {
  return (
    <div className="w-full mx-auto rounded-xl border border-gray-300 shadow-md overflow-hidden bg-white">
      {/* Browser top bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-b border-gray-300">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      {/* Scrollable iframe */}
      <div className="h-[750px] overflow-y-scroll">
        <iframe
          src={url}
          className="w-full h-full"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
}
