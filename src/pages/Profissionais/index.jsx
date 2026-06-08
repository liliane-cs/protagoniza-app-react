import axios from "axios";
import React, { useEffect, useState } from "react";

export const ListaProfissionais = () => {

    const [profissionais, setProfissionais] = useState([]);
    const [areaFiltro, setAreaFiltro] = useState('Todas');
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const puxarDados = async () => {
            try{
                setLoading(true);
                const resposta = await axios.get('https://mockapi.io/clone/6a2455f8420469ff067afedc');
                setProfissionais(resposta.data);

                alert('Lista atualizada co sucesso!!');
            } catch (erro) {
                setErro('Ocorreu um erro ao carregar as profissionais.');
                alert('Erro ao conectar com o servidor');
                console.error(erro); } finally {
                    setLoading(false);
                }
        };

        puxarDados();
    }, []);

    const profissionaisFiltradas = profissionais.filter((prof) => {
        if(areaFiltro === 'Todas') return true;
        return prof.area.toLowerCase() === areaFiltro.toLocaleLowerCase();
    });

    
    const areasDisponiveis = ['Todas', ...new Set(profissionais.map((p) => p.area))]

     
  const profissionaisFiltradas = profissionais.filter((prof) => {
    if (areaFiltro === 'Todas') return true;
    return prof.area.toLowerCase() === areaFiltro.toLowerCase();
  });

  
  if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>Carregando dados...</div>;
  if (erro) return <div style={{ color: 'red', textAlign: 'center', padding: '50px' }}>{erro}</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Filtrar por Especialidade:</h2>
      
      
      <div style={{ marginBottom: '30px' }}>
        <select 
          value={areaFiltro} 
          onChange={(e) => setAreaFiltro(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', borderRadius: '6px', minWidth: '200px' }}
        >
          {areasDisponiveis.map((area) => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
      </div>

      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {profissionaisFiltradas.length > 0 ? (
          profissionaisFiltradas.map((profissional) => (
            <ProfissionalCard key={profissional.id} profesional={profissional} />
          ))
        ) : (
          <p>Nenhuma profissional cadastrada nesta área ainda.</p>
        )}
      </div>
    </div>
  );
};