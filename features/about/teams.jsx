import React,{useEffect,useState} from 'react';
import {supabase,MediaImage,Link} from '@laes/runtime';
export function AboutTeams(){
 const [state,setState]=useState({loading:true,teams:[],error:false});
 useEffect(()=>{let alive=true;supabase.from('teams').select('id,name,slug,logo_url').eq('active',true).order('sort').then(({data,error})=>{if(alive)setState({loading:false,teams:data||[],error:!!error})}).catch(()=>{if(alive)setState({loading:false,teams:[],error:true})});return()=>{alive=false}},[]);
 if(state.loading)return <div className="laes-about-teams" role="status" aria-label="Carregando equipes da liga">{Array.from({length:6},(_,i)=><div key={i} className="laes-about-team-placeholder" aria-hidden="true"/>)}</div>;
 if(state.error)return <p className="laes-about-team-notice" role="status">Não foi possível carregar as equipes agora. <Link to="/equipes">Ver as equipes da liga →</Link></p>;
 if(!state.teams.length)return <p className="laes-about-team-notice">As próximas equipes da liga aparecerão aqui.</p>;
 return <div className="laes-about-teams" aria-label="Equipes da LAES">{state.teams.map(team=><Link key={team.id} to="/equipes/$slug" params={{slug:team.slug}} className="laes-about-team"><div className="laes-about-team-art"><MediaImage src={team.logo_url} alt={`Logo ${team.name}`} loading="lazy"/></div><span>{team.name}</span></Link>)}</div>;
}
