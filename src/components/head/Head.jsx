import img from '../../assets/headerImg.png'
import './head.css'

export const Head = () => {
  return (
    <header className="d-flex justify-content-center bg-dark">
        <div className="row container align-items-center" >
            <div className="col-sm-6 textoHeader mx-auto p-5 ">
                <span>uma simulação de texto</span>
                <h1 className="my-2">Lorem Ipsum é simplesmente uma simulação</h1>
                <h4 className="my-3">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido</h4>
                <div className='mx-auto mt-5 row'>
                    <button className=' btn col-12 btn-warning' type="button" >Clique aqui</button>
                </div>    
                <span>Lorem Ipsum é simplesmente uma simulação de texto</span>            
            </div>
            <div className="col-sm-6 mx-auto image ">
                <img src={img} className='img-fluid' alt="" />
            </div>   
        </div>
    </header>
  )
}
