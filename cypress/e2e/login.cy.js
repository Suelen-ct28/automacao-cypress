import Login from '../pages/login/index'
import Inventory from '../pages/inventory/index'

describe('Login', () => {

    beforeEach(() => {
        //Arrange  
        Login.visistarPagina()
    })

    it('Realizar login com sucesso', () => {  
        
        //Act
        Login.preencherCredenciaisValidas()

        //Assert
        Inventory.validarAcessoPagina()

    });

    it('Realizar login com credenciais inválidas', () => {

        //Act
        Login.preencherCredenciaisInvalidas()

        //Assert
        Login.validarErroCredenciaisInvalidas()
    })
});