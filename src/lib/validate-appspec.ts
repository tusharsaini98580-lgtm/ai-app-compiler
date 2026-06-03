import {
  integrationRegistry,
} from "./integrations";

export function validateAppSpec(
  appSpec: any
) {

  const errors: string[] = [];

  const pages =
    appSpec?.uiSchema?.pages || [];

  const endpoints =
    appSpec?.apiSchema?.endpoints || [];

  const workflows =
    appSpec?.workflows || [];

  const authRules =
    appSpec?.authRules || {};

  // =========================
  // PAGE ↔ API VALIDATION
  // =========================

  pages.forEach((page: any) => {

    const hasApi =
      endpoints.some(
        (api: any) =>

          api.path
            ?.toLowerCase()
            .includes(
              page.route
                ?.replace("/", "")
                ?.toLowerCase()
            )
      );

    if (!hasApi) {

      errors.push(
        `Page '${page.name}' has no matching API endpoint`
      );

    }

  });

  // =========================
  // WORKFLOW VALIDATION
  // =========================

  workflows.forEach(
    (workflow: any) => {

      const integration =
        integrationRegistry.find(
          (item) =>
            item.id ===
            workflow.integration
        );

      if (!integration) {

        errors.push(
          `Workflow integration '${workflow.integration}' is invalid`
        );

      }

    }
  );

  // =========================
  // AUTH VALIDATION
  // =========================

  const roles =
    authRules?.roles || [];

  authRules?.permissions?.forEach(
    (permission: any) => {

      if (
        !roles.includes(
          permission.role
        )
      ) {

        errors.push(
          `Permission role '${permission.role}' does not exist`
        );

      }

    }
  );

  return {

    success:
      errors.length === 0,

    errors,

  };

}