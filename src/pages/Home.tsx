import ilustrationImg from '../assets/images/illustration.svg'
import logoImage from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Imagem de ilustração do login" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImage} alt="Logo Letmeask" />
                    <button> 
                        <img src={googleIconImg} alt="google icon" />
                        Crie sua sala com o Google
                    </button>
                    <div>
                        ou entre em uma sala
                    </div>
                    <form>
                        <input type="text"
                               placeholder="Digite o código da sala" 
                        />
                        <button type="submit">
                            Entrar na Sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}