export default function Footer() {
  return (
    <div className="mt-10 bg-[url('./assets/background-footer2.png')] w-auto h-screen bg-cover bg-center">
      <section className='w-full h-full flex items-center justify-end px-4 md:mr-16'>
        <div className='md:w-[800px] mr-16 h-full flex flex-col items-end justify-center bg-transparent backdrop-blur-sm rounded-xl'>
          <span className='text-white text-2xl md:text-7xl mb-8'>Mustang</span>
          <p className='text-zinc-300 text-base md:text-2xl leading-relaxed text-right'>
            O Ford Mustang é um automóvel desportivo produzido pela Ford Motor
            Company. O carro foi apresentado ao público em 17 de abril de 1964
            durante a New York World's Fair. O Mustang, apesar de ter sofrido
            grandes alterações ao longo dos anos é a mais antiga linha de
            automóveis da Ford.
          </p>
          <button className='w-[300px] mt-6 text-zinc-300 px-4 py-2 border-2 border-gray-400 rounded-lg hover:text-zinc-200 hover:border-zinc-200'>
            <a href='#'>Ver Carros</a>
          </button>
        </div>
      </section>
    </div>
  );
}
