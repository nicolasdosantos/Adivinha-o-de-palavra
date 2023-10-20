import {useState} from "react";
import style from "./Palavra.module.css"

const listaDePalavras = [
    { animal: "calopsita", dica: "Pássaro que voa e canta o hino nacional" },
    { animal: "tartaruga", dica: "Réptil que possui casco e é lento" },
    { animal: "cachorro", dica: "Animal de estimação leal e companheiro" },
    { animal: "gato", dica: "Animal independente e às vezes mal-humorado" },
    { animal: "papagaio", dica: "Ave colorida que pode repetir palavras" },
    { animal: "coelho", dica: "Animal peludo que pula e come cenouras" },
    { animal: "peixe", dica: "Animal aquático com barbatanas" },
    { animal: "pomba", dica: "Ave da paz frequentemente usada em simbolismo" },
    { animal: "hamster", dica: "Roedor pequeno que gosta de correr em rodas" },
    { animal: "cobra", dica: "Réptil venenoso que rasteja" },
    { animal: "elefante", dica: "Maior animal terrestre com tromba" },
    { animal: "girafa", dica: "Mamífero de pescoço longo que alcança as folhas das árvores" },
    { animal: "leão", dica: "O rei da selva com juba" },
    { animal: "tigre", dica: "Felino listrado e poderoso" },
    { animal: "macaco", dica: "Primata que adora balançar em árvores" },
    { animal: "panda", dica: "Ursinho preto e branco amado por todos" },
    { animal: "pinguim", dica: "Ave marinha que não voa e vive no gelo" },
    { animal: "raposa", dica: "Animal astuto frequentemente associado a fábulas" },
    { animal: "urso", dica: "Mamífero grande e peludo que hiberna" },
    { animal: "zebra", dica: "Mamífero listrado encontrado na savana" },
]; //lista de palavras

const num = Math.floor(Math.random() * 19) + 1
// const para escolher uma palavra aleatoria
const palavraCorreta = listaDePalavras[num]
//armazenar a palavra correta

function Palavra(){

    const  [palavra, setPalavra] = useState("")
    const [tentativa, setTentativa] = useState(4)
    const [resultado, setResultado] = useState()
    const [dica, setDica] = useState()
    const [erro, setErro] = useState([])


    function descobrir(event){
        //digitar a palavra
        setPalavra(event.target.value)
    }


// Você pode adicionar ou remover palavras conforme necessário.

    function vida(event){
        if(tentativa >= 1) {
            setTentativa(tentativa-1)
            if(palavra == palavraCorreta.animal ){
                setResultado("acertou")
            }
            else {

                setPalavra("")
                let aux = erro
                aux.push(palavra)
                setErro(aux)

                if (tentativa == 2) {
                    setDica(palavraCorreta.dica)
                }

                if (tentativa == 1) {
                    setResultado("errou")
                }
            }
        }
        else {
            setResultado("errou")
        }

    }



    return(
        <div style={{backgroundImage: 'url("/background image (2).png")'}} className={style.main}>
            <div className={style.main2}>
                <img src={"/logo (2).png"}></img>
                <div className={style.basinga}>
                    <p className={style.p}>Você tem {tentativa} tentativa</p>
                    <h5>{dica}</h5>
                    <input className={style.input} value={palavra} onChange={descobrir}/>
                    <button  onClick={vida}>Adivinhar</button>
                    <div className={style.palavras}>
                        {erro.map((item) => <p>{item}</p>)}
                        {resultado == "acertou" && <p><span style={{color: "green"}}> Você acertou a palavra </span></p>}
                        {resultado == "errou" && <p>Você <span style={{color: "red"}}>errou</span>  :( <br/> A palavra certa era: <span style={{color: "red"}}>{palavraCorreta}</span>  </p>}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Palavra