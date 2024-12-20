
import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-emec',
  templateUrl: './registro-emec.page.html',
  styleUrls: ['./registro-emec.page.scss'],
})
export class RegistroEmecPage {
  selectedState: string = '';
  selectedMunicipality: string = '';
  municipalities: string[] = [];

  stateMunicipalities: { [key: string]: string[] } = {
    AC: ['Acrelândia', 'Assis Brasil', 'Brasiléia', 'Bujari', 'Capixaba', 'Cruzeiro do Sul', 'Epitaciolândia', 'Feijó', 'Jordão', 'Mâncio Lima', 'Manoel Urbano', 'Marechal Thaumaturgo', 'Plácido de Castro', 'Porto Acre', 'Porto Walter', 'Rio Branco', 'Rodrigues Alves', 'Santa Rosa do Purus', 'Senador Guiomard', 'Sena Madureira', 'Tarauacá', 'Xapuri'],
    AL: ['Água Branca', 'Anadia', 'Arapiraca', 'Atalaia', 'Barra de Santo Antônio', 'Barra de São Miguel', 'Batalha', 'Belém', 'Belo Monte', 'Boca da Mata', 'Branquinha', 'Cacimbinhas', 'Cajueiro', 'Campestre', 'Campo Alegre', 'Campo Grande', 'Canapi', 'Capela', 'Carneiros', 'Chã Preta', 'Coité do Nóia', 'Colônia Leopoldina', 'Coqueiro Seco', 'Coruripe', 'Craíbas', 'Delmiro Gouveia', 'Dois Riachos', 'Estrela de Alagoas', 'Feira Grande', 'Feliz Deserto', 'Flexeiras', 'Girau do Ponciano', 'Ibateguara', 'Igaci', 'Igreja Nova', 'Inhapi', 'Jacaré dos Homens', 'Jacuípe', 'Japaratinga', 'Jaramataia', 'Jequiá da Praia', 'Joaquim Gomes', 'Jundiá', 'Junqueiro', 'Lagoa da Canoa', 'Limoeiro de Anadia', 'Maceió', 'Major Isidoro', 'Mar Vermelho', 'Maragogi', 'Maravilha', 'Marechal Deodoro', 'Maribondo', 'Mata Grande', 'Matriz de Camaragibe', 'Messias', 'Minador do Negrão', 'Monteirópolis', 'Murici', 'Novo Lino', 'Olho d\'Água das Flores', 'Olho d\'Água do Casado', 'Olho d\'Água Grande', 'Olivença', 'Ouro Branco', 'Palestina', 'Palmeira dos Índios', 'Pão de Açúcar', 'Pariconha', 'Paripueira', 'Passo de Camaragibe', 'Paulo Jacinto', 'Penedo', 'Piaçabuçu', 'Pilar', 'Pindoba', 'Piranhas', 'Poço das Trincheiras', 'Porto Calvo', 'Porto de Pedras', 'Porto Real do Colégio', 'Quebrangulo', 'Rio Largo', 'Roteiro', 'Santa Luzia do Norte', 'Santana do Ipanema', 'Santana do Mundaú', 'São Brás', 'São José da Laje', 'São José da Tapera', 'São Luís do Quitunde', 'São Miguel dos Campos', 'São Miguel dos Milagres', 'São Sebastião', 'Satuba', 'Senador Rui Palmeira', 'Tanque d\'Arca', 'Taquarana', 'Teotônio Vilela', 'Traipu', 'União dos Palmares', 'Viçosa'],
    AP: ['Amapá', 'Calçoene', 'Cutias', 'Ferreira Gomes', 'Itaubal', 'Laranjal do Jari', 'Macapá', 'Mazagão', 'Oiapoque', 'Pedra Branca do Amapari', 'Porto Grande', 'Pracuúba', 'Santana', 'Serra do Navio', 'Tartarugalzinho', 'Vitória do Jari'],
    AM: ['Alvarães', 'Amaturá', 'Anamã', 'Anori', 'Apuí', 'Atalaia do Norte', 'Autazes', 'Barcelos', 'Barreirinha', 'Benjamin Constant', 'Beruri', 'Boa Vista do Ramos', 'Boca do Acre', 'Borba', 'Caapiranga', 'Canutama', 'Carauari', 'Careiro', 'Careiro da Várzea', 'Coari', 'Codajás', 'Eirunepé', 'Envira', 'Fonte Boa', 'Guajará', 'Humaitá', 'Ipixuna', 'Iranduba', 'Itacoatiara', 'Itamarati', 'Itapiranga', 'Japurá', 'Juruá', 'Jutaí', 'Lábrea', 'Manacapuru', 'Manaquiri', 'Manaus', 'Manicoré', 'Maraã', 'Maués', 'Nhamundá', 'Nova Olinda do Norte', 'Novo Airão', 'Novo Aripuanã', 'Parintins', 'Pauini', 'Presidente Figueiredo', 'Rio Preto da Eva', 'Santa Isabel do Rio Negro', 'Santo Antônio do Içá', 'São Gabriel da Cachoeira', 'São Paulo de Olivença', 'São Sebastião do Uatumã', 'Silves', 'Tabatinga', 'Tapauá', 'Tefé', 'Tonantins', 'Uarini', 'Urucará', 'Urucurituba'],
    BA: ['Abaíra', 'Abaré', 'Acajutiba', 'Adustina', 'Água Fria', 'Aiquara', 'Alagoinhas', 'Alcobaça', 'Almadina', 'Amargosa', 'Amélia Rodrigues', 'América Dourada', 'Anagé', 'Andaraí', 'Andorinha', 'Angical', 'Anguera', 'Antas', 'Antônio Cardoso', 'Antônio Gonçalves', 'Aporá', 'Apuarema', 'Araças', 'Aracatu', 'Araci', 'Aramari', 'Arataca', 'Aratuípe', 'Aurelino Leal', 'Baianópolis', 'Baixa Grande', 'Banzaê', 'Barra', 'Barra da Estiva', 'Barra do Choça', 'Barra do Mendes', 'Barra do Rocha', 'Barreiras', 'Barro Alto', 'Barrocas', 'Barro Preto', 'Belmonte', 'Belo Campo', 'Biritinga', 'Boa Nova', 'Boa Vista do Tupim', 'Bom Jesus da Lapa', 'Bom Jesus da Serra', 'Boninal', 'Bonito', 'Boquira', 'Botuporã', 'Brejões', 'Brejolândia', 'Brotas de Macaúbas', 'Brumado', 'Buerarema', 'Buritirama', 'Caatiba', 'Cabaceiras do Paraguaçu', 'Cachoeira', 'Caculé', 'Caém', 'Caetanos', 'Caetité', 'Cafarnaum', 'Cairu', 'Caldeirão Grande', 'Camacan', 'Camaçari', 'Camamu', 'Campo Alegre de Lourdes', 'Campo Formoso', 'Canápolis', 'Canarana', 'Canavieiras', 'Candeal', 'Candeias', 'Candiba', 'Cândido Sales', 'Cansanção', 'Canudos', 'Capela do Alto Alegre', 'Capim Grosso', 'Caraíbas', 'Caravelas', 'Cardeal da Silva', 'Carinhanha', 'Casa Nova', 'Castro Alves', 'Catolândia', 'Catu', 'Caturama', 'Central', 'Chorrochó', 'Cícero Dantas', 'Cipó', 'Coaraci', 'Cocos', 'Conceição da Feira', 'Conceição do Almeida', 'Conceição do Coité', 'Conceição do Jacuípe', 'Conde', 'Condeúba', 'Contendas do Sincorá', 'Coração de Maria', 'Cordeiros', 'Coribe', 'Coronel João Sá', 'Correntina', 'Cotegipe', 'Cravolândia', 'Crisópolis', 'Cristópolis', 'Cruz das Almas', 'Curaçá'],
    RR: ['Alto Alegre', 'Amajari', 'Boa Vista', 'Bonfim', 'Cantá', 'Caracaraí', 'Caroebe', 'Iracema', 'Mucajaí', 'Normandia', 'Pacaraima', 'Rorainópolis', 'São João da Baliza', 'São Luiz', 'Uiramutã'],
    SC: ['Florianópolis', 'Joinville', 'Blumenau', 'São José', 'Chapecó', 'Itajaí', 'Criciúma', 'Jaraguá do Sul', 'Lages', 'Balneário Camboriú', 'Palhoça', 'Brusque', 'Tubarão', 'São Bento do Sul', 'Caçador'],
    SP: ['São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo', 'Santo André', 'Osasco', 'São José dos Campos', 'Ribeirão Preto', 'Sorocaba', 'Mauá', 'São José do Rio Preto', 'Mogi das Cruzes', 'Santos', 'Diadema', 'Jundiaí'],
    SE: ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto', 'Itabaiana', 'São Cristóvão', 'Estância', 'Tobias Barreto', 'Itabaianinha', 'Simão Dias', 'Propriá', 'Nossa Senhora das Dores', 'Capela', 'Canindé de São Francisco', 'Porto da Folha', 'Lagarto'],
    TO: ['Palmas', 'Araguaína', 'Gurupi', 'Porto Nacional', 'Paraíso do Tocantins', 'Tocantinópolis', 'Miracema do Tocantins', 'Guaraí', 'Colinas do Tocantins', 'Dianópolis', 'Formoso do Araguaia', 'Araguatins', 'Taguatinga', 'Xambioá', 'Augustinópolis']
  };

  constructor() {}

  onStateChange() {
    this.municipalities = this.stateMunicipalities[this.selectedState] || [];
    this.selectedMunicipality = '';
  }
}
