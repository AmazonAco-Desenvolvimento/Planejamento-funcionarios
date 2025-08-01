export interface customer {
  filial: string;
  name: string;
  id: string;
  sector: string;
  desc: string;
  empresa: string;
}

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

export interface table {
  id: string;
  data_extra: string;
  descricao: string;
  criado_por: string;
  status: string;
  created_at: string;
  setor: string;
}

export interface customer_extra_details {
  nome_funcionario: string;
  id: string;
  database_id?: string;
  extra_id?: string;
  setor: string;
  atv?: string;
  desc: string;
  data?: string;
  empresa?: string;
  funcao?: string;
  turno?: string;
  rota?: boolean;
  ceia?: boolean;
  desj?: boolean;
  almoco?: boolean;
  lanc1?: boolean;
  lancDob?: boolean;
  lancEsp?: boolean;
  lanc2?: boolean;
  jan?: boolean;
  created_at?: string;
}

export interface sector {
  ccCode: string;
  ccDesc: string;
}
