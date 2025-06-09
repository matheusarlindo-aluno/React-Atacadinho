import './Carrinho.css';
import { useEffect, useState } from 'react';
import botaoVoltar from './voltar.png';

function ListarUsuario() {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]); // Novo estado para os itens filtrados
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Define quantos itens por página
    const [filterName, setFilterName] = useState(''); // Estado para o filtro de nome
    const [filterEmail, setFilterEmail] = useState(''); // Estado para o filtro de e-mail

    // Função para buscar os usuários
    async function listItems() {
        try {
            const api = await fetch("http://localhost:8090/usuario/admin/listarUsuarios");
            const resposta = await api.json();

            if (api.ok) {
                setItems(resposta);
                setFilteredItems(resposta); // Inicialmente, os itens filtrados são todos os itens
            } else {
                alert("Erro ao listar usuários.");
            }
        } catch (error) {
            console.error("Erro na requisição da API:", error);
            alert("Erro ao conectar com o servidor.");
        }
    }

    // Carrega os usuários uma vez ao montar o componente
    useEffect(() => {
        listItems();
    }, []);

    // Efeito para aplicar os filtros sempre que filterName, filterEmail ou items mudarem
    useEffect(() => {
        let currentFilteredItems = items.filter(item => {
            const matchesName = item.name.toLowerCase().includes(filterName.toLowerCase());
            const matchesEmail = item.email.toLowerCase().includes(filterEmail.toLowerCase());
            return matchesName && matchesEmail;
        });
        setFilteredItems(currentFilteredItems);
        setCurrentPage(1); // Redefine a página para 1 sempre que os filtros mudarem
    }, [filterName, filterEmail, items]);

    // Lógica para paginação (agora baseada em filteredItems)
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    // Calcula o número total de páginas
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    // Função para mudar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Cria os números das páginas para os botões de paginação
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='carrinho'>
            <nav className='cabecalho_user'>
                <a href='/admin'><img className='back_button' src={botaoVoltar} alt="Voltar"/></a>
            </nav>

            <h1>Listagem de Usuários</h1>

            {/* Campos de Filtro */}
            <div className="filter-controls">
                <input
                    type="text"
                    placeholder="Filtrar por nome"
                    value={filterName}
                    onChange={(e) => setFilterName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Filtrar por e-mail"
                    value={filterEmail}
                    onChange={(e) => setFilterEmail(e.target.value)}
                />
            </div>

            <table className='table'>
                <thead>
                    <tr>
                        <th className='table-titulo'>Nome</th>
                        <th className='table-titulo'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.length > 0 ? (
                        currentItems.map((item) => (
                            <tr key={item.email}>
                                <td className='item-table'>{item.name}</td>
                                <td className='item-table'>{item.email}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" className="no-results">Nenhum usuário encontrado com os filtros aplicados.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Controles de Paginação */}
            <div className="pagination">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={currentPage === number ? 'active' : ''}
                    >
                        {number}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages || totalPages === 0}
                >
                    Próxima
                </button>
            </div>
        </div>
    );
}

export default ListarUsuario;