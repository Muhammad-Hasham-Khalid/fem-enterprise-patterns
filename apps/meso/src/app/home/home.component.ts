import { Component, OnInit } from '@angular/core';

interface BaseEntity {
  id: string | null;
}

interface Client extends BaseEntity {
  firstName: string;
  lastName: string;
  company: string;
}

interface Action {
  type: string;
  payload?: any;
}

const peter: Client = {
  id: '1',
  firstName: 'Peter',
  lastName: 'Parker',
  company: 'Acme, Inc.',
};

const john: Client = {
  id: '2',
  firstName: 'John',
  lastName: 'Doe',
  company: 'NA',
};

const clients: Client[] = [peter, john];

interface ClientsState {
  clients: Client[];
  currentClient: Client;
}

const newClient: Client = {
  id: null,
  firstName: '',
  lastName: '',
  company: '',
};

const initialClientsState: ClientsState = {
  clients,
  currentClient: newClient,
};

class ClientsStore {
  state: ClientsState;

  constructor(state: ClientsState) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  select(key: keyof typeof this.state) {
    return this.state[key];
  }
}

const CLIENT_LOAD = '[Client] Load';
const CLIENT_CREATE = '[Client] Create';
const CLIENT_UPDATE = '[Client] Update';
const CLIENT_DELETE = '[Client] Delete';
const CLIENT_SELECT = '[Client] Select';
const CLIENT_CLEAR = '[Client] Clear';

function loadClient(state: ClientsState, clients: any) {
  return state;
}

function selectClient(state: ClientsState, client: any) {
  return state;
}

const clientsReducer = (
  state: ClientsState = initialClientsState,
  action: Action
) => {
  switch (action.type) {
    case CLIENT_LOAD:
      return loadClient(state, action.payload);

    case CLIENT_SELECT:
      return selectClient(state, action.payload);

    default:
      return state;
  }
};

const clientsStore = new ClientsStore(initialClientsState);
const currentClient = clientsStore.select('currentClient');

interface Project extends BaseEntity {
  title: string;
  description: string;
  completed: boolean;
}

interface ProjectsState {
  projects: Project[];
  currentProject: Project;
}

const superProject: Project = {
  id: '1',
  title: 'Super Project',
  description: 'This is awesome!',
  completed: false,
};

const boringProject: Project = {
  id: '2',
  title: 'Boring Project',
  description: 'This is boring!',
  completed: true,
};

const projects: Project[] = [superProject, boringProject];

const newProject: Project = {
  id: null,
  title: '',
  description: '',
  completed: false,
};

const initialProjectState: ProjectsState = {
  projects,
  currentProject: newProject,
};

interface AppState {
  clientsState: ClientsState;
  projectsState: ProjectsState;
}

const appState: AppState = {
  clientsState: initialClientsState,
  projectsState: initialProjectState,
};

class ProjectsStore {
  state: ProjectsState;

  constructor(state: ProjectsState) {
    this.state = state;
  }

  select(key: keyof typeof this.state) {
    return this.state[key];
  }

  getState() {
    return this.state;
  }
}

const tango = clientsStore;

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
