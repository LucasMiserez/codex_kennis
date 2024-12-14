export default async function Home() {
  const data = await fetch(`${process.env.HOST_URL}/api/random`);
  const nummer = await data.json();

  return (
    <>
      <p>{nummer.titel}</p>
      <p>Pagina: {nummer.pagina}</p>
      <iframe
        width="560"
        height="315"
        src={nummer.src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
}
