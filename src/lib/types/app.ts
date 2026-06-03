export interface AppIntent {
  appName: string;
  appType:
    | "crm"
    | "project_management"
    | "ecommerce"
    | "hr_tool"
    | "inventory"
    | "content_platform"
    | "analytics"
    | "custom";

  features: string[];
  entities: string[];
  integrations_requested: string[];
  assumptions: string[];
}

export interface EntityField {
  name: string;
  type: string;
  nullable: boolean;
  isRelation: boolean;
  isPrimary: boolean;
  isUnique: boolean;
}

export interface EntityRelation {
  type: "hasMany" | "belongsTo" | "hasOne";

  target: string;

  foreignKey: string;

  onDelete: string;
}

export interface EntitySchema {
  name: string;

  tableName: string;

  fields: EntityField[];

  relations: EntityRelation[];
}

export interface DataSchema {
  entities: EntitySchema[];
}

export interface AppPage {
  name: string;

  route: string;

  layout:
    | "list"
    | "detail"
    | "dashboard"
    | "settings";

  entity: string;

  components: string[];
}

export interface ApiEndpoint {
  path: string;

  method: string;

  description: string;

  entity: string;

  authRequired: boolean;
}

export interface WorkflowStub {
  name: string;

  entity: string;

  integration: string;

  action: string;
}

export interface AppSpec {
  pages: AppPage[];

  apiEndpoints: ApiEndpoint[];

  workflowStubs: WorkflowStub[];

  jsx: string;
}