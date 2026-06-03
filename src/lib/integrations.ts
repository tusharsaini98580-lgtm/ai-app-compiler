export const integrationRegistry = [
  {
    id: "slack",

    displayName: "Slack",

    authType: "oauth2",

    triggers: [
      "task_overdue",
      "deal_closed",
      "leave_approved",
    ],

    actions: [
      {
        id: "send_message",

        description:
          "Send message to Slack channel",

        inputSchema: {
          channel: "string",
          text: "string",
        },
      },

      {
        id: "send_dm",

        description:
          "Send direct message",

        inputSchema: {
          userId: "string",
          text: "string",
        },
      },

      {
        id: "post_block",

        description:
          "Post formatted block",

        inputSchema: {
          blocks: "array",
        },
      },
    ],
  },

  {
    id: "whatsapp",

    displayName: "WhatsApp",

    authType: "api_key",

    triggers: [
      "deal_closed",
      "user_registered",
    ],

    actions: [
      {
        id: "send_template_message",

        description:
          "Send WhatsApp template message",

        inputSchema: {
          phone: "string",
          template: "string",
        },
      },

      {
        id: "send_notification",

        description:
          "Send notification",

        inputSchema: {
          phone: "string",
          message: "string",
        },
      },
    ],
  },

  {
    id: "gmail",

    displayName: "Gmail",

    authType: "oauth2",

    triggers: [
      "order_created",
      "low_stock",
    ],

    actions: [
      {
        id: "send_email",

        description:
          "Send email notification",

        inputSchema: {
          to: "string",
          subject: "string",
          body: "string",
        },
      },

      {
        id: "create_calendar_event",

        description:
          "Create calendar event",

        inputSchema: {
          title: "string",
          date: "string",
        },
      },
    ],
  },

  {
    id: "stripe",

    displayName: "Stripe",

    authType: "api_key",

    triggers: [
      "subscription_created",
      "payment_success",
    ],

    actions: [
      {
        id: "create_customer",

        description:
          "Create Stripe customer",

        inputSchema: {
          email: "string",
        },
      },

      {
        id: "create_subscription",

        description:
          "Create subscription",

        inputSchema: {
          customerId: "string",
          priceId: "string",
        },
      },

      {
        id: "issue_refund",

        description:
          "Issue payment refund",

        inputSchema: {
          paymentId: "string",
        },
      },
    ],
  },

  {
    id: "jira",

    displayName: "Jira",

    authType: "oauth2",

    triggers: [
      "task_created",
      "task_updated",
    ],

    actions: [
      {
        id: "create_issue",

        description:
          "Create Jira issue",

        inputSchema: {
          title: "string",
          description: "string",
        },
      },

      {
        id: "update_issue",

        description:
          "Update Jira issue",

        inputSchema: {
          issueId: "string",
          status: "string",
        },
      },

      {
        id: "assign_user",

        description:
          "Assign Jira user",

        inputSchema: {
          issueId: "string",
          assignee: "string",
        },
      },
    ],
  },
];