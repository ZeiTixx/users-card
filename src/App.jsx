import React from 'react';
import { Icon } from '@iconify/react';

function App() {


  return (
    <>
      <nav className="bg-white shadow w-full fixed top-0 left-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0">
              
              </div>
              <div className="hidden md:flex md:flex items-center">
                <a  className="text-slate-900 bold px-3 py-2 rounded-md text-3xl font-bold cursor-pointer">S.</a>
                <a  className="text-slate-900 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Seeqr</a>
                <a  className="text-slate-500 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Fonctionnalités</a>
                <a  className="text-slate-500 hover:text-slate-800 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Nos créateurs</a>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <a  className="text-gray-900 border-2 border-slate-200 px-2 py-2 rounded-md text-sm font-medium cursor-pointer">Devenir créateurs</a>
              <a  className="ml-4 bg-slate-900 text-white px-2 py-2 rounded-md text-sm font-medium hover:bg-slate-700  cursor-pointer">Se connecter</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-between h-screen w-full">
        <div className="w-7/12 flex items-center justify-center">
          <div className="p-10 rounded-lg shadow-lg max-w-md">
            <h1 className="text-3xl font-semibold text-slate-900">Se connecter</h1>
            <div className="flex items-center justify-center my-4">
              <Icon icon="bi:apple" className="mx-2 border border-slate-300 rounded p-1" style={{ fontSize: '24px' }} />
              <Icon icon="prime:google" color="white" className="bg-slate-900 rounded mx-2 border-2 border-slate-300 p-1" style={{ fontSize: '24px' }} />
              <Icon icon="ic:sharp-facebook" className="mx-2 border border-slate-300 rounded p-1" style={{ fontSize: '24px' }} />
            </div>
            <input
              type="text"
              className="border-b border-slate-300 w-full py-2 px-3 text-gray-700 mt-4"
              placeholder="Email"
            />
            <input
              type="text"
              className="border-b border-slate-300 w-full py-2 px-3 text-gray-700 leading-tight mt-4"
              placeholder="Mot de passe"
            />
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500 mr-2" />
                <span className="text-slate-900 font-semibold cursor-pointer">Rester connecté</span>
              </div>
              <div className="text-slate-900 underline underline-offset-1 font-semibold cursor-pointer">Mot de passe oublié</div>
            </div>
            <div className="bg-slate-900 text-white cursor-pointer rounded-md p-2 mt-6 text-center hover:bg-slate-700">Découvrir</div>
            <div className="text-sm flex items-center justify-center mt-2">
              <div className="mr-4">Vous n'êtes pas abonné ?</div>
              <div className="cursor-pointer text-slate-400 underline underline-offset-2">Abonnez-vous ici !</div>
            </div>
          </div>
        </div>
        <div className="w-5/12 bg-slate-950 flex flex-col items-center justify-center text-white ">
          <h1 className="text-5xl font-semibold">Seeqr</h1>
          <h2 className="text-2xl mt-4 my-6">Plus qu'un simple outil</h2>
          <p className='mx-8'>Suivre les recommandations de vos influenceurs et créateur de contenu préférés n'a jamais été aussi aisé et plaisant.
            Soyez tenu à jour des tendances et soutenez vos stars des réseaux favorites.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
