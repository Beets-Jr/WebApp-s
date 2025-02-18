# Estilos (Styles)

Esta pasta contém os estilos globais, temas e configurações de estilização da aplicação.

## 🗂 Arquivos

### `theme.js`
Configuração do tema Material-UI com cores, tipografia e componentes customizados.

```typescript
interface Theme {
  palette: {
    primary: {
      main: string;
      light: string;
      dark: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
    };
  };
  typography: {
    fontFamily: string;
    h1: object;
    h2: object;
    // ...
  };
  components: {
    MuiButton: object;
    MuiPaper: object;
    // ...
  };
}

// Uso
import { ThemeProvider } from '@mui/material';
import theme from './theme';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

### `global.js`
Estilos globais usando styled-components.

## 🔧 Propósito
- Design system
- Consistência visual
- Responsividade
- Acessibilidade
- Tematização
- Customização
- Reutilização

## 📋 Boas Práticas
1. Componentização
2. Variáveis CSS
3. Mobile first
4. Semântica
5. Performance
6. Manutenibilidade
7. Escalabilidade
8. Documentação
9. Padronização
10. Acessibilidade

## 🔄 Padrões Comuns
- CSS-in-JS
- Styled Components
- CSS Modules
- Sass/SCSS
- Design Tokens
- Atomic Design
- BEM
- SMACSS

## 🛡️ Responsabilidades
- Temas
- Cores
- Tipografia
- Layout
- Espaçamento
- Animações
- Responsividade
- Acessibilidade

## 📚 Exemplos

### Tema Material-UI
```typescript
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
      light: '#64B5F6',
      dark: '#1976D2'
    },
    secondary: {
      main: '#FF4081',
      light: '#FF80AB',
      dark: '#F50057'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none'
        }
      }
    }
  }
});

export default theme;
```

## ⚡ Performance
- Code splitting
- Tree shaking
- Critical CSS
- Lazy loading
- Minificação
- Compressão
- Caching

## 🎨 Design System
- Cores
- Tipografia
- Espaçamento
- Grid
- Breakpoints
- Sombras
- Elevação
- Animações 