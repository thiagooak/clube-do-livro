export default function Video({ videoKey }) {
  return (
    <div className="aspect-video">
      <iframe
        width="100%"
        src={`https://www.youtube-nocookie.com/embed/${videoKey}?si=tmJ1U14aY3tyFBPB&amp;controls=0`}
        title="Gravação da Reunião"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="mx-auto my-4 h-full w-full"
      ></iframe>
    </div>
  );
}
