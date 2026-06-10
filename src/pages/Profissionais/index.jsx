import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  Card from '../../components/Card/index.jsx';
import { getProfissionais } from '../../services/protagonizaService.jsx';


export default function Profissionais() {
    const [profissionais, setProfissionais] = useState([]);
    const [areaFiltro, setAreaFiltro] = useState('Todas');
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const puxarDados = async () => {
            
            try {
                setLoading(true);
                setErro(null);
                 
             const resposta = await getProfissionais({
                    signal: controller.signal
                });
                
                const dados = Array.isArray(resposta.data) ? resposta.data : (resposta.data.profissionais || []);
                setProfissionais(dados);
            } catch (error) {
                if (!axios.isCancel(error)) {
                    setErro('Ocorreu um erro ao carregar as profissionais.');
                    console.error(error);
                }
            } finally {
                setLoading(false);
            }
        };

        puxarDados();

        return () => controller.abort();
    }, []);

    const profissionaisFiltradas = profissionais.filter((prof) => {
        if (!prof || !prof.area) return false;
        if (areaFiltro === 'Todas') return true;
        return prof.area.toLowerCase() === areaFiltro.toLowerCase();
    });

    const areasDisponiveis = ['Todas', ...new Set(profissionais.map((p) => p?.area).filter(Boolean))];

    if (loading) return <div style={{ textAlign: 'center', padding: '50px', fontSize: '18px' }}>Carregando dados...</div>;
    if (erro) return <div style={{ color: 'red', textAlign: 'center', padding: '50px' }}>{erro}</div>;

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '20px', color: '#333' }}>Filtrar por Especialidade:</h2>
            
            <div style={{ marginBottom: '30px' }}>
                <select 
                    value={areaFiltro} 
                    onChange={(e) => setAreaFiltro(e.target.value)}
                    style={{ padding: '10px', fontSize: '16px', borderRadius: '6px', minWidth: '200px', cursor: 'pointer' }}
                >
                    {areasDisponiveis.map((area) => (
                        <option key={area} value={area}>{area}</option>
                    ))}
                </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr ', justifyContent: 'center', gap: '20px' }}>
                {profissionaisFiltradas.length > 0 ? (
                    profissionaisFiltradas.map((profissional) => (
                        <Card 
                            key={profissional.id} 
                            titulo={profissional.nome || profissional.titulo} 
                            descricao={profissional.descricao || profissional.biografia} 
                            imagem={profissional.foto || profissional.imagem} 
                        />
                    ))
                ) : (
                    <p style={{ color: '#666', marginTop: '20px' }}>Nenhuma profissional cadastrada nesta área ainda.</p>
                )}
            </div>
        </div>
    );
}