export default function YouTube({ id }: { id: string }) {
  return (
    <div className="[&:not(:first-child)]:mt-2">
      <iframe
        className="aspect-video w-full rounded-md"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
