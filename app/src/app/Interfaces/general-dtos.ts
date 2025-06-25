export interface rota {
  motorista: string;
  motorista_phone: string;
  numero: string;
  carro: string;
  detalhes: route_details[];
}

export interface route_details {
  nome_funcionario: string;
  telefone_funcionario: string;
  id_funcionario: string;
  obs: string;
  zona: string;
  bairro: string;
  trajeto: string;
  reference: string;
  turno: string;
  ha: string;
}

export interface customer_extra_details {
  data: string;
  nome_funcionario: string;
  id: string;
  setor: string;
  empresa: string;
  funcao: string;
  turno: string;
  rota: boolean;
  ceia: boolean;
  desj: boolean;
  almoco: boolean;
  lanc1: boolean;
  lancDob: boolean;
  lancEsp: boolean;
  lanc2: boolean;
  jan: boolean;
}
