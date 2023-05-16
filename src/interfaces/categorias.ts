export interface IData {
  content: ICategoria[]
}

export interface ICategoria {
  codigo: Codigo
  nombre: string
  url_img: string
  slug: string
  productos: IProducto[]
}

export enum Codigo {
  C00001 = 'C00001',
  C00002 = 'C00002',
  C00003 = 'C00003',
  C00004 = 'C00004',
  C00005 = 'C00005',
  C00006 = 'C00006',
  C00007 = 'C00007',
  C00008 = 'C00008',
}

export interface IProducto {
  codigo: string
  categoria: Codigo
  nombre: string
  marca: Marca
  procedencia: Procedencia
  slug: string
  url_img: string
  descripcion: string
}

export enum Marca {
  Sansung = 'SANSUNG',
}

export enum Procedencia {
  China = 'CHINA',
}
