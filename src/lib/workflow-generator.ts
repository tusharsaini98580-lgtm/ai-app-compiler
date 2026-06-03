import { integrationRegistry } from "./integrations";

export function generateWorkflowStub(prompt: string) {

  const workflows = [];

  const lowerPrompt = prompt.toLowerCase();

  if (
    lowerPrompt.includes("slack") ||
    lowerPrompt.includes("notification")
  ) {

    workflows.push({
      name: "Slack Alert Workflow",

      trigger: {
        entity: "Task",
        event: "task_overdue",
      },

      integration: "slack",

      action: "send_message",

      payload: {
        channel: "#alerts",
        message: "Task deadline exceeded",
      },
    });
  }

  if (
    lowerPrompt.includes("payment") ||
    lowerPrompt.includes("subscription")
  ) {

    workflows.push({
      name: "Stripe Subscription Workflow",

      trigger: {
        entity: "Billing",
        event: "payment_success",
      },

      integration: "stripe",

      action: "create_subscription",

      payload: {
        tier: "enterprise",
      },
    });
  }

  if (
    lowerPrompt.includes("email") ||
    lowerPrompt.includes("gmail")
  ) {

    workflows.push({
      name: "Email Notification Workflow",

      trigger: {
        entity: "User",
        event: "user_registered",
      },

      integration: "gmail",

      action: "send_email",

      payload: {
        subject: "Welcome to RuntimeOS",
      },
    });
  }

  return workflows;
}

export function validateWorkflowIntegrations(workflows: any[]) {

  const errors: string[] = [];

  workflows.forEach((workflow) => {

    const integration = integrationRegistry.find(
      (item) => item.id === workflow.integration
    );

    if (!integration) {

      errors.push(
        `Integration '${workflow.integration}' not found`
      );

      return;
    }

    const validTrigger =
      integration.triggers.includes(
        workflow.trigger.event
      );

    if (!validTrigger) {

      errors.push(
        `Invalid trigger '${workflow.trigger.event}' for ${workflow.integration}`
      );
    }

    const validAction =
  integration.actions.some(
    (action: any) =>
      action.id ===
      workflow.action
  );

    if (!validAction) {

      errors.push(
        `Invalid action '${workflow.action}' for ${workflow.integration}`
      );
    }

  });

  return errors;
}