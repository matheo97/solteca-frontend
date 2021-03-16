import { CompanyInfo } from 'services/api';

declare namespace Solteca {
  export interface CustomWindow extends Window {
    analytics?: {
      page(url: string): void;
      setAnonymousId(id: string): void;
      _integrations: {
        Intercom: {
          options: {
            appId: string;
          };
        };
      };
    };
    Intercom(type: string): void;
    opr?: {
      addons: object;
    };
    opera?: any;
    HTMLElement?: object;
    safari?: any;
    location: any;
    previousLocation?: string;
    _mfq?: any;
    Cypress?: any;
    google: {
      maps: {
        Geocoder: google.maps.Geocoder;
        places: {
          AutocompleteService: Constructable<google.maps.places.AutocompleteService>;
        };
      };
    };
  }
  export interface StoreWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
  export interface Action {
    type: string;
    payload: FullState;
  }
  export interface FullState {
    tickets: TicketsState;
    company: CompanyState;
  }
  export interface EmptyState {
    tickets: unknown;
    company: unknown;
  }
  export interface AllReducersTypes {
    tickets: TicketsState | undefined | Reducer<unknown, any>;
    company: CompanyState | undefined | Reducer<unknown, any>;
  }
  export interface TicketsState {
    activeTickets: Ticket[];
    oldTickets: Ticket[];
  }
  export interface Ticket {
    id: string;
    plate: string;
    fuel: 'Gas' | 'Hybrid' | 'Electric';
    plan: number;
    getIn: string;
    getOut?: string;
    total?: number;
  }

  export interface CompanyState extends CompanyInfo {}
}

export default Solteca;
