import type { InstitutionalPage } from "../types";
import { associeSePage } from "./associeSePage";
import { conselhoPage } from "./conselhoPage";
import { diretoriaPage } from "./diretoriaPage";
import { exPresidentesPage } from "./exPresidentesPage";
import { palavraPresidentePage } from "./palavraPresidentePage";
import { estatutoPage } from "./estatutoPage";
import { identidadeGavioesPage } from "./identidadeGavioesPage";
import { quemSomosPage } from "./quemSomosPage";
import { subsedesPage } from "./subsedesPage";

export const institutionalPages: InstitutionalPage[] = [
  quemSomosPage,
  associeSePage,
  conselhoPage,
  diretoriaPage,
  palavraPresidentePage,
  exPresidentesPage,
  estatutoPage,
  subsedesPage,
  identidadeGavioesPage,
];
