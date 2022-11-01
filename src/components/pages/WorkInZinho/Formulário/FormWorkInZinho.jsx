import React from "react";

import FormWorkInZinho from "./Styles";

const FormularioWorkInZinho = () => {
  return (
    <FormWorkInZinho className="gap">
      <label htmlFor="areadeinteresse" className="fs-4">
        Área de interesse <span>*</span>
      </label>
      <select name="areadeinteresse" id="areadeinteresse">
        <option value="Administrativo">Administrativo</option>
        <option value="Comercial e vendas">Comercial e vendas</option>
        <option value="Financeiro">Financeiro</option>
        <option value="Marketing">Marketing</option>
        <option value="Produção">Produção</option>
        <option value="Outro">Outro</option>
      </select>
      <label htmlFor="nomedavaga" className="fs-4">
        Nome da Vaga
      </label>
      <input
        type="text"
        name="nomedavaga"
        id="nomedavaga"
        placeholder="Nome da vaga"
        required
      />
      <label htmlFor="nome" className="fs-4">
        Nome <span>*</span>
      </label>
      <input type="text" name="nome" id="nome" placeholder="Digite seu nome" />
      <label htmlFor="email" className="fs-4">
        Email <span>*</span>
      </label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Digite seu E-mail"
        required
      />
      <label htmlFor="telefone" className="fs-4">
        Telefone <span>*</span>
      </label>
      <input
        type="number"
        id="telefone"
        name="telefone"
        placeholder="Digite seu telefone"
        required
      />
      <div className="container-cidade-estado">
        <label htmlFor="estado" className="fs-4">
          Estado <span>*</span>
        </label>
        <select name="estado" id="estado">
          <option value="">Selecione seu Estado</option>
          <option value="Tocantins">Tocantins</option>
          <option value="São Paulo">São Paulo</option>
          <option value="Sergipe">Sergipe</option>
          <option value="Santa Catarina">Santa Catarina</option>
          <option value="Roraima">Roraima</option>
          <option value="Rio Grande do Sul">Rio Grande do Sul</option>
          <option value="Rondônia">Rondônia</option>
          <option value="Rio Grande do Norte">Rio Grande do Norte</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Piauí">Piauí</option>
          <option value="Pernambuco">Pernambuco</option>
          <option value="Paraná">Paraná</option>
          <option value="Paraíba">Paraíba</option>
          <option value="Pará">Pará</option>
          <option value="Minas Gerais">Minas Gerais</option>
          <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
          <option value="Mato Grosso">Mato Grosso</option>
          <option value="Maranhão">Maranhão</option>
          <option value="Goiás">Goiás</option>
          <option value="Espiríto Santo">Espiríto Santo</option>
          <option value="Distrito Federal">Distrito Federal</option>
          <option value="Ceará">Ceará</option>
          <option value="Bahia">Bahia</option>
          <option value="Amapá">Amapá</option>
          <option value="Amazonas">Amazonas</option>
          <option value="Alagoas">Alagoas</option>
          <option value="Acre">Acre</option>
        </select>
        <label htmlFor="cidade" className="fs-4">
          Cidade <span>*</span>
        </label>
        <input
          type="text"
          name="cidade"
          id="cidade"
          placeholder="Digite o nome da sua cidade"
          required
        />
      </div>
      <label htmlFor="docs" className="fs-4">
        Currículo (Extensões de arquivos permitidos: .DOC, .DOCX, .PDF){" "}
        <span>*</span>
      </label>
      <input
        type="file"
        name="docs"
        id="docs"
        title="Anexar
        "
        required
      />
      <label htmlFor="portfolio" className="fs-4">
        Link para portfólio (opcional)
      </label>
      <input
        type="text"
        name="portfolio"
        id="portfolio"
        placeholder="Link do seu Portfólio"
      />
      <label htmlFor="mensagem" className="fs-4">
        Escreva sua mensagem:
      </label>
      <textarea
        name="mensaegm"
        id="mensagem"
        cols="30"
        rows="10"
        placeholder="Escreva sua mensagem"
      ></textarea>
      <div className="aviso">
        <div className="title">ATENÇÃO</div>
        <p className="fs-5">
          Com intuito de conferir transparência e credibilidade ao tratamento
          dos seus dados, o (a) candidato (a) deverá estar ciente da Política de
          Privacidade e Tratamento de Dados para Candidatos a Vagas de Emprego
          da "ZINHO"{" "}
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            (Clique aqui e leia a Política de Privacidade)
          </a>
          , bem como manifestar concordância, da seguinte forma:
        </p>
        <div className="checkbox">
          <input type="checkbox" name="checkbox" id="checkbox" required />
          <label htmlFor="checkbox" className="fs-5">
            {" "}
            Eu, manifesto concordância de forma livre, informada e inequívoca
            com o tratamento de meus dados pessoais para finalidades
            relacionadas à prospecção de talentos, de acordo com a Política de
            Privacidade e Tratamento de Dados para Candidatos a Vagas de Emprego
            disponível no website da "ZINHO"{" "}
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              (Clique aqui e leia a Política de Privacidade)
            </a>{" "}
            e em respeito à Lei Geral de Proteção de Dados (Lei nº 13.709/18).*
          </label>
        </div>
      </div>
      <div className="containerButton">
        <input type="submit" value="Enviar" />
      </div>
    </FormWorkInZinho>
  );
};

export default FormularioWorkInZinho;
