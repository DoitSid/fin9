const useCases = [
  {id:1,useCase:'Capture meeting context',description:'Capture meeting transcript, key discussion points, decisions, client concerns, commitments and next steps.',stakeholder:'Wealth Advisor / RM / Relationship Manager',capability:'Post-Meeting Agent; Meeting Intelligence',match:'Direct',support:'Fin9 can convert meeting conversations into structured summaries, action items, decisions and CRM-ready outputs.',integrations:'Meeting transcript / recording; CRM; calendar',gap:'Validate exact transcript source and CRM fields required.'},
  {id:2,useCase:'Update CRM post meeting',description:'Update CRM with meeting notes, actions, follow-ups, opportunities and relevant client information after a meeting.',stakeholder:'RM / Advisor / Sales Operations',capability:'Post-Meeting Agent; CRM integrations; Workflow',match:'Direct',support:'Post-meeting workflow can prepare CRM updates and sync structured outputs into the CRM with approval controls.',integrations:'CRM API; meeting transcript',gap:'Exact CRM objects, fields and write permissions need configuration.'},
  {id:3,useCase:'Wealth Advisor Briefing before QBR',description:'Prepare the advisor with client history, portfolio context, open actions, recent communications and discussion points before a quarterly review.',stakeholder:'Wealth Advisor / RM',capability:'Pre-Meeting Agent / Client Preparation Agent',match:'Direct',support:'Fin9 can aggregate CRM history, prior meetings, communications, portfolio context and open actions into a structured briefing.',integrations:'CRM; portfolio data; email; prior meeting records; calendar',gap:'Portfolio-system connector and source priority rules may need configuration.'},
  {id:4,useCase:'RM Performance Monitoring',description:'Monitor RM activity, client interactions, follow-ups, open tasks and performance indicators across a defined period.',stakeholder:'Head of Wealth / RM Manager / Sales Head',capability:'Workflow Builder; Reporting/Analytics; similar client implementation',match:'Partial',support:'Fin9 can collect operational activity from connected systems, run workflows and generate structured reports/dashboards.',integrations:'CRM; activity logs; calendar; reporting data',gap:'Specific RM KPI definitions and dashboard/reporting layer may require development.'},
  {id:5,useCase:'Client 360 / Client Dossier',description:'Create a consolidated view of client profile, relationship history, portfolio context, interactions, documents, actions and opportunities.',stakeholder:'RM / Advisor / Client Service Team',capability:'Pre-Meeting Agent; Projects & Knowledge Context; Connectors',match:'Partial',support:'Fin9 can aggregate information across CRM, documents, meetings and connected systems into a structured client context.',integrations:'CRM; Drive/document repository; portfolio system; meeting history',gap:'A persistent standardized Client 360 data model may need configuration.'},
  {id:6,useCase:'Client meeting preparation',description:'Prepare advisor for upcoming meetings by identifying previous discussions, unresolved commitments, relevant documents and suggested questions.',stakeholder:'Wealth Advisor / RM',capability:'Pre-Meeting Agent; Meeting Assistant',match:'Direct',support:'Pre-meeting intelligence is an established Fin9/SarvaX capability.',integrations:'Calendar; CRM; email; meeting transcripts; portfolio data',gap:'Source availability and recency rules must be configured per client.'},
  {id:7,useCase:'Post-meeting follow-up email',description:'Draft personalized client follow-up based on meeting decisions, commitments and next steps.',stakeholder:'Advisor / RM / Client Service',capability:'Post-Meeting Agent; Workflow',match:'Direct',support:'Meeting output can be transformed into advisor-reviewed follow-up drafts.',integrations:'Meeting transcript; CRM; email',gap:'Outbound send should remain approval-controlled.'},
  {id:8,useCase:'Create follow-up tasks',description:'Create internal tasks from meeting commitments, assign owners and due dates, and track completion.',stakeholder:'RM / Operations / Team Lead',capability:'Post-Meeting Agent; Workflow Builder; Scheduler',match:'Direct',support:'Fin9 can extract actions and route them into structured workflow tasks.',integrations:'Meeting transcript; task system / CRM',gap:'Task destination and escalation rules need configuration.'},
  {id:9,useCase:'Identify missed / overdue follow-ups',description:'Detect commitments or client actions that have not been completed within the expected time window.',stakeholder:'RM Manager / Operations / Advisor',capability:'Workflow Builder; Scheduler; Monitoring',match:'Partial',support:'A scheduled workflow can compare extracted commitments against task/activity records and raise alerts.',integrations:'CRM; task system; calendar',gap:'Exact SLA logic and notification channel need configuration.'},
  {id:10,useCase:'Client inactivity monitoring',description:'Identify clients or client groups with no interaction for a defined period.',stakeholder:'RM Manager / Head of Wealth / Operations',capability:'Workflow Builder; Scheduler; CRM Connectors',match:'Direct',support:'Scheduled workflows can query connected records and trigger alerts based on inactivity rules.',integrations:'CRM; communication history; calendar',gap:'Define inactivity threshold and exception rules.'},
  {id:11,useCase:'Unreplied client message alerts',description:'Identify client messages that have not received a response within a defined SLA.',stakeholder:'Client Service / RM / Operations',capability:'Workflow Builder; Communication Connectors; Scheduler',match:'Direct',support:'Fin9 workflows can monitor communication records and trigger alerts when configured conditions are met.',integrations:'WhatsApp/email/communication platform; CRM',gap:'Channel API limitations and SLA rules need validation.'},
  {id:12,useCase:'WhatsApp group monitoring',description:'Monitor WhatsApp groups for relevant client messages, unanswered queries or operational events.',stakeholder:'RM / Client Service / Operations',capability:'Workflow Automation; WhatsApp integration',match:'Partial',support:'Fin9 has supported WhatsApp-based workflow automation in client POCs and can orchestrate message retrieval and actions where APIs permit.',integrations:'WhatsApp/Prutech or supported provider; CRM',gap:'Meta/provider group-access limitations can affect scope.'},
  {id:13,useCase:'KYC document collection',description:'Identify required KYC documents for a client and generate a structured checklist/request.',stakeholder:'Compliance / Operations / RM',capability:'KYC Intelligence Officer / KYC Documents Agent',match:'Direct',support:'KYC agent capability can map client context to required documents and manage structured collection workflows.',integrations:'Client profile; KYC rules; document repository',gap:'Jurisdiction-specific rules and final compliance approval required.'},
  {id:14,useCase:'KYC document validation',description:'Validate uploaded KYC documents for completeness, readability, consistency and required fields.',stakeholder:'Compliance / Operations',capability:'KYC Intelligence Officer / Document Intelligence',match:'Direct',support:'Fin9 can process documents, extract information and identify exceptions for review.',integrations:'Uploaded documents; KYC checklist',gap:'Validation rules and exception categories need configuration.'},
  {id:15,useCase:'Compliance documentation from meetings',description:'Convert meeting discussions into structured compliance notes, disclosures, suitability records or audit-ready documentation.',stakeholder:'Compliance Officer / RM / Advisor',capability:'NANA Compliance Agents; Post-Meeting Agent; Document Intelligence',match:'Partial',support:'Fin9 can structure meeting-derived information and generate advisor/compliance-reviewed documentation.',integrations:'Meeting transcript; compliance templates; CRM',gap:'Compliance-specific rulebook and approval workflow need to be configured.'},
  {id:16,useCase:'Compliance exception detection',description:'Identify missing disclosures, incomplete documentation, inconsistent records or other defined compliance exceptions.',stakeholder:'Compliance / Risk / Operations',capability:'NANA Compliance Agents; Workflow; Document Intelligence',match:'Partial',support:'Fin9 can compare structured records against defined rules and route exceptions for human review.',integrations:'CRM; documents; policy/rule repository',gap:'Exact regulatory rules and deterministic validation requirements need to be defined.'},
  {id:17,useCase:'Client communication compliance review',description:'Review proposed client communication for required language, missing disclosures or policy violations before sending.',stakeholder:'Compliance / Advisor / RM',capability:'NANA Compliance Agents; HITL / Approval Controls',match:'Partial',support:'Fin9 can place AI-generated communication into an approval-first workflow before delivery.',integrations:'Email/WhatsApp; compliance policy documents',gap:'Policy library and validation criteria need to be configured.'},
  {id:18,useCase:'Market intelligence for advisors',description:'Generate a market intelligence brief covering relevant market movements, themes and client-relevant information.',stakeholder:'Investment Team / RM / Advisor',capability:'Horizon Market Intelligence; Research Agents',match:'Direct',support:'Horizon Market Intelligence is designed for structured market and investment research workflows.',integrations:'Market-data sources; research sources',gap:'Data-provider licenses/connectors determine available depth.'},
  {id:19,useCase:'Portfolio review preparation',description:'Prepare a portfolio review pack with holdings context, performance information, concentration points and discussion prompts.',stakeholder:'Wealth Advisor / Investment Team',capability:'Wealth360 Analyst; Pre-Meeting Agent; Document/PPT generation',match:'Partial',support:'Fin9 can combine portfolio-analysis capabilities with pre-meeting context and generate structured outputs.',integrations:'Portfolio platform; market data; CRM',gap:'Exact calculations and source-of-truth portfolio data must be validated.'},
  {id:20,useCase:'Client portfolio insights',description:'Analyze portfolio data to surface concentration, allocation, performance or other defined indicators.',stakeholder:'Investment Analyst / Advisor',capability:'Wealth360 Analyst; Skills / Agents',match:'Direct',support:'Wealth360 Analyst can support structured portfolio analysis from configured input data.',integrations:'Portfolio data; market data',gap:'Exact analytical metrics depend on the configured agent and source data.'},
  {id:21,useCase:'Investment research report',description:'Research a company, security, sector or investment theme and produce a structured report.',stakeholder:'Investment Analyst / Research Team',capability:'Research Agent; Horizon Market Intelligence; SarvaX Foundation Skills',match:'Partial',support:'Fin9 can combine research-oriented agents, connected sources and document-generation skills.',integrations:'Research sources; market data; internal knowledge',gap:'Specific licensed data sources may need MCP/connector integration.'},
  {id:22,useCase:'IB pitch preparation',description:'Generate an investment-banking pitch structure using company information, financial data, market context and required presentation outputs.',stakeholder:'Investment Banking / Corporate Finance',capability:'IB Pitch Architect',match:'Direct',support:'IB Pitch Architect is designed to support structured Excel/PPT/HTML pitch workflows.',integrations:'Company data; financial data; research sources',gap:'Templates, source mappings and approval requirements need configuration.'},
  {id:23,useCase:'Financial planning / FP analysis',description:'Generate structured financial-planning analysis using client information and relevant research/data.',stakeholder:'Financial Planner / Advisor',capability:'FP Agent; ValueResearch/Open-source research sources',match:'Partial',support:'FP Agent is being developed around multiple planning/research skills and can support structured analysis.',integrations:'Client financial data; research sources; planning rules',gap:'Exact skill set and production readiness depend on current FP Agent build.'},
  {id:24,useCase:'AMC / product research',description:'Research investment products, funds or AMCs and summarize relevant information for advisor use.',stakeholder:'Investment Team / RM',capability:'Horizon Market Intelligence; Research Agent; Connectors',match:'Partial',support:'Research agents can retrieve and structure information from connected/approved sources.',integrations:'Morningstar; ValueResearch; WealthSpectrum; Investwell; other approved sources',gap:'Provider API/MCP availability and licensing determine coverage.'},
  {id:25,useCase:'Generate client review report',description:'Compile meeting information, portfolio information and action items into a client review document.',stakeholder:'Advisor / RM / Client Service',capability:'SarvaX Foundation; Document Generation; Post-Meeting Agent',match:'Partial',support:'Fin9\'s document skills can transform structured workflow outputs into reusable report formats.',integrations:'Meeting data; portfolio data; templates',gap:'Client-specific report template and approval process required.'},
  {id:26,useCase:'Generate Excel analysis',description:'Create or update Excel-based analysis from structured financial/client data.',stakeholder:'Investment Analyst / Operations / Advisor',capability:'SarvaX Foundation Excel Skill; Document Generation',match:'Platform',support:'Fin9 Foundation capabilities include structured spreadsheet generation and analysis workflows.',integrations:'Structured data; Excel template',gap:'Complex formulas/macros may require additional validation.'},
  {id:27,useCase:'Generate PowerPoint presentation',description:'Create a presentation from research, financial analysis or meeting outputs.',stakeholder:'Investment Banking / Wealth / Sales',capability:'SarvaX Foundation PPT Skill; IB Pitch Architect',match:'Direct',support:'Fin9 can generate presentation outputs through document-generation skills and specialized pitch workflows.',integrations:'Research/financial data; PPT template',gap:'Brand/template and review rules need configuration.'},
  {id:28,useCase:'Generate BRD / requirements document',description:'Convert discovery notes and structured requirements into a formal BRD.',stakeholder:'Product Manager / Business Analyst / Delivery Team',capability:'SarvaX Foundation BRD Skill; Documents',match:'Direct',support:'BRD generation is a horizontal document-generation capability suited to structured requirements.',integrations:'Meeting transcript; discovery notes; templates',gap:'Organization-specific BRD template and mandatory sections should be configured.'},
  {id:29,useCase:'Generate SOP',description:'Convert a process into a standardized SOP with roles, steps, inputs, outputs and controls.',stakeholder:'Operations / Compliance / Product',capability:'SarvaX Foundation SOP Skill; Workflow Builder',match:'Direct',support:'Fin9 can structure operational knowledge into reusable SOP documents.',integrations:'Process documentation; policy documents',gap:'Approval/version-control workflow may need configuration.'},
  {id:30,useCase:'Generate RFP response',description:'Read an RFP, map requirements to company capabilities and prepare a structured response.',stakeholder:'Sales / Presales / Product',capability:'SarvaX Foundation RFP Skill; Projects & Knowledge Context',match:'Partial',support:'Fin9 can use knowledge context and document-generation capabilities to structure RFP responses.',integrations:'RFP document; product knowledge base; approved collateral',gap:'Source-of-truth library and response governance required.'},
  {id:31,useCase:'Generate sales collateral / one-pager',description:'Create a client-specific one-pager from approved product capabilities and discovery information.',stakeholder:'Sales / Presales / Product Marketing',capability:'SarvaX Foundation; Documents; Projects & Knowledge',match:'Platform',support:'Fin9 can generate structured documents from approved knowledge and templates.',integrations:'Product knowledge; brand templates; discovery notes',gap:'Brand governance and approved-content library need configuration.'},
  {id:32,useCase:'Central knowledge repository',description:'Maintain and retrieve approved product, process, client and operational knowledge.',stakeholder:'Product / Operations / Sales / Compliance',capability:'Projects & Knowledge Context; Documents; OneChat',match:'Direct',support:'Fin9 supports project/knowledge context for grounding agents and workflows.',integrations:'Internal documents; Drive; knowledge repositories',gap:'Taxonomy, access controls and source ownership need definition.'},
  {id:33,useCase:'Ask questions across enterprise documents',description:'Search and answer questions using approved internal documents and connected knowledge sources.',stakeholder:'All Business Teams',capability:'OneChat; Projects & Knowledge Context; Connectors',match:'Direct',support:'OneChat plus knowledge context can provide a conversational interface over connected information.',integrations:'Drive; documents; internal knowledge sources',gap:'Permission-aware retrieval and source freshness need configuration.'},
  {id:34,useCase:'Automated document extraction',description:'Extract structured fields from PDFs, forms, statements, KYC documents or other business documents.',stakeholder:'Operations / Compliance / Finance',capability:'Document Intelligence; Agents',match:'Direct',support:'Fin9\'s document intelligence capabilities support extraction and downstream workflow automation.',integrations:'PDFs/documents; target schema',gap:'Document-specific extraction schemas and validation rules required.'},
  {id:35,useCase:'Email-to-workflow automation',description:'Use incoming emails as triggers to classify requests, extract information and initiate downstream actions.',stakeholder:'Operations / Client Service / Sales',capability:'Workflow Builder; Connectors; Agent Runtime',match:'Partial',support:'Fin9 can orchestrate event-driven workflows when the email system exposes the required connector/API.',integrations:'Email platform; CRM/task system',gap:'Trigger mechanism and permitted write actions need configuration.'},
  {id:36,useCase:'Calendar-driven automation',description:'Trigger preparation, reminders, reports or workflows based on upcoming or completed calendar events.',stakeholder:'Advisor / RM / Operations',capability:'Scheduler; Meetings & Calendar Intelligence; Workflow Builder',match:'Direct',support:'Calendar context can be used to trigger pre-meeting preparation and scheduled operational workflows.',integrations:'Google Calendar/Outlook; CRM',gap:'Calendar permissions and event classification rules required.'},
  {id:37,useCase:'Meeting scheduling and reminders',description:'Schedule meetings, send reminders and coordinate related preparation tasks.',stakeholder:'RM / Client Service / Operations',capability:'Scheduler; Meetings & Calendar Intelligence',match:'Partial',support:'Fin9 includes scheduling/calendar intelligence capabilities that can coordinate workflow actions around meetings.',integrations:'Calendar; email/communication channel',gap:'Full booking/rescheduling behavior depends on connector capabilities.'},
  {id:38,useCase:'Automated periodic management report',description:'Compile recurring operational data into a weekly/monthly management report.',stakeholder:'Head of Wealth / COO / Operations',capability:'Workflow Builder; Report Generation; Scheduler',match:'Direct',support:'Fin9 can schedule recurring workflows and generate structured reports from connected data.',integrations:'CRM; operational systems; reporting data',gap:'KPI definitions and destination format need configuration.'},
  {id:39,useCase:'Daily RM activity report',description:'Generate daily/weekly summaries of meetings, calls, follow-ups, pending actions and client activity.',stakeholder:'RM Manager / Head of Wealth',capability:'Workflow Builder; Scheduler; Reporting',match:'Partial',support:'Activity data can be aggregated through scheduled workflows and presented as structured reports.',integrations:'CRM; calendar; communication logs',gap:'Exact KPI model and source mappings need configuration.'},
  {id:40,useCase:'Lead generation and prospect research',description:'Identify prospects based on defined criteria, enrich company/person information and prepare structured prospect lists.',stakeholder:'Sales / Business Development',capability:'Lead Generator Workflow; Research Agents; Connectors',match:'Partial',support:'Fin9 can orchestrate prospect research, enrichment and structured outputs where data sources permit.',integrations:'Approved lead sources; Google Sheets/CRM; research sources',gap:'External data-provider/API availability and compliance rules need validation.'},
  {id:41,useCase:'Existing lead deduplication',description:'Check new prospects against an existing-leads dataset and avoid duplicates before adding prospects.',stakeholder:'Sales Operations / SDR Team',capability:'Workflow Builder; Document/Sheet processing',match:'Direct',support:'A workflow can read a source sheet, normalize identity fields and apply duplicate/exclusion rules.',integrations:'Google Sheets/CRM',gap:'Identity matching rules and write permissions must be defined.'},
  {id:42,useCase:'Sales call post-processing',description:'Convert sales-call transcripts into CRM notes, next steps, opportunity updates and follow-up drafts.',stakeholder:'Sales / Account Executive / Sales Operations',capability:'Post-Meeting Agent; CRM Workflow',match:'Direct',support:'Fin9 publicly documents post-call execution covering transcript processing, CRM updates and follow-up preparation.',integrations:'Meeting transcript; CRM; email',gap:'CRM field mapping and approval policy need configuration.'},
  {id:43,useCase:'Customer support ticket triage',description:'Classify incoming support requests, extract issue details, prioritize and route to the correct team.',stakeholder:'Customer Support / Operations',capability:'Workflow Builder; Agent Runtime; Connectors',match:'Partial',support:'Fin9\'s agent/workflow architecture can support classification, routing and downstream actions.',integrations:'Support platform; knowledge base',gap:'Support-specific agent, routing rules and integrations need configuration.'},
  {id:44,useCase:'Operations exception routing',description:'Detect exceptions in operational processes and route them to the correct owner with context.',stakeholder:'Operations / Compliance / Team Lead',capability:'Workflow Builder; Monitoring; HITL Controls',match:'Direct',support:'Fin9 can combine rule/agent detection with human escalation and approval workflows.',integrations:'Operational system; rules; notifications',gap:'Exception taxonomy and escalation matrix required.'},
  {id:45,useCase:'Approval workflow for high-risk actions',description:'Require a human approval before client communication, CRM changes, compliance actions or other sensitive operations.',stakeholder:'Compliance / Manager / Advisor',capability:'HITL Controls; RBAC; Audit Logs',match:'Direct',support:'Human approval is a core governance pattern in the platform.',integrations:'Target workflow; approval roles',gap:'Approval matrix and action-level permissions must be configured.'},
  {id:46,useCase:'Role-based access control',description:'Restrict agents, workflows, data and actions based on user role or tenant.',stakeholder:'IT / Security / Operations',capability:'RBAC; Tenant Isolation; SSO/SAML',match:'Direct',support:'Fin9 supports enterprise governance controls including role-based access and tenant isolation.',integrations:'Identity provider; role matrix',gap:'Exact enterprise IAM configuration required.'},
  {id:47,useCase:'Audit trail of AI actions',description:'Record workflow executions, generated outputs, approvals, timestamps and operational actions.',stakeholder:'Compliance / Security / IT',capability:'Audit Logs; Monitoring & Security',match:'Direct',support:'Fin9\'s architecture includes audit-ready workflow logging and approval tracking.',integrations:'Workflow runtime; identity context',gap:'Retention/export requirements need configuration.'},
  {id:48,useCase:'Private deployment / client-controlled environment',description:'Run the platform or solution in a controlled client environment with restricted data access.',stakeholder:'CIO / CISO / Enterprise IT',capability:'Private Deployment; Security & Governance',match:'Platform',support:'Fin9 supports enterprise deployment patterns and controlled data access.',integrations:'Client cloud; networking; identity; APIs',gap:'Deployment architecture and infrastructure responsibilities must be defined per client.'},
  {id:49,useCase:'Enterprise connector integration',description:'Connect CRM, Drive, calendar, communication, portfolio and business applications into one execution layer.',stakeholder:'IT / Product / Operations',capability:'Connectors & Integrations; MCP; Agent Runtime',match:'Direct',support:'Fin9 is designed as an integration layer with 1,000+ integrations and MCP-based extensibility.',integrations:'Target application APIs/connectors',gap:'Specific app availability, authentication and API limits must be validated.'},
  {id:50,useCase:'Custom MCP server integration',description:'Expose a client-specific system or capability as a tool that Fin9 agents/workflows can call.',stakeholder:'IT / Engineering / Product',capability:'Custom MCP Servers; MCP Support',match:'Platform',support:'Custom MCP support is part of the Fin9 roadmap/platform direction for extending tool access.',integrations:'Client API/tool specification',gap:'Implementation and security review required for each MCP server.'},
  {id:51,useCase:'Cross-system workflow orchestration',description:'Move data and actions across CRM, documents, communication, meetings and operational systems in one process.',stakeholder:'Operations / Product / IT',capability:'Workflow Builder V2; Agent Runtime; Connectors',match:'Direct',support:'Fin9 is designed to orchestrate multi-step workflows across enterprise systems.',integrations:'Multiple system APIs',gap:'Workflow-specific error handling and retry logic need configuration.'},
  {id:52,useCase:'Multi-agent business process',description:'Use multiple specialized agents in sequence, passing context and outputs between them.',stakeholder:'Product / Operations / Enterprise IT',capability:'Multi-Agent Orchestration; Agent Builder',match:'Platform',support:'Fin9 architecture supports agent-to-agent orchestration for complex end-to-end processes.',integrations:'Multiple agents/tools; shared context',gap:'Supervisor logic and handoff conditions need to be designed.'},
  {id:53,useCase:'Mobile access to agents/workflows',description:'Allow users to access Fin9 capabilities and execute relevant workflows from mobile.',stakeholder:'Advisor / RM / Management',capability:'Fin9 Mobile App; OneChat; Agents',match:'Direct',support:'Fin9 mobile apps provide access to the platform\'s user experience and agent capabilities.',integrations:'Mobile app; tenant configuration',gap:'Mobile-specific workflow UX should be validated for each use case.'},
  {id:54,useCase:'Browser-based research / execution',description:'Allow an agent to navigate web interfaces when no structured API is available.',stakeholder:'Research / Operations / Sales',capability:'Browser Assistant / Browser Automation',match:'Platform',support:'Browser-based execution can support workflows that require interaction with web applications.',integrations:'Target web application; credentials/access',gap:'Site restrictions, authentication, stability and approval controls need validation.'},
  {id:55,useCase:'Document-to-action workflow',description:'Read a document, extract required information, validate it and trigger downstream actions.',stakeholder:'Operations / Compliance / Finance',capability:'Document Intelligence; Workflow Builder; Agent Runtime',match:'Direct',support:'Fin9 can chain document extraction into validation, routing and downstream system updates.',integrations:'Source documents; target system',gap:'Document schema and action rules need configuration.'},
  {id:56,useCase:'Knowledge-grounded agent',description:'Create an agent that answers or executes tasks using a controlled internal knowledge base.',stakeholder:'Product / Sales / Operations / Compliance',capability:'Agent Builder; Projects & Knowledge Context; Skills',match:'Direct',support:'Fin9 supports agents grounded in project/enterprise knowledge and reusable skills.',integrations:'Approved knowledge sources',gap:'Knowledge ownership, refresh cadence and access controls required.'},
  {id:57,useCase:'Reusable business skill',description:'Create a repeatable capability such as report generation, BRD creation, Excel analysis or SOP generation.',stakeholder:'Product / Operations / PMO',capability:'SarvaX Foundation Skills / Skills Directory',match:'Direct',support:'Horizontal skills can be reused across agents and workflows.',integrations:'Skill definition; template; inputs/outputs',gap:'Skill QA/evaluation and versioning should be defined.'},
  {id:58,useCase:'AI output evaluation and QA',description:'Evaluate agent/workflow outputs against predefined quality, accuracy and compliance criteria.',stakeholder:'Product / QA / Compliance',capability:'Testing & Evaluation; Monitoring; Agent Evaluation',match:'Platform',support:'Fin9\'s product direction includes evaluation and reliability controls for agent/workflow quality.',integrations:'Evaluation dataset; expected outputs; scoring criteria',gap:'Specific evaluation framework and automated test harness may need implementation.'},
  {id:59,useCase:'Workflow monitoring',description:'Monitor workflow success/failure, exceptions, latency and execution status.',stakeholder:'Product / Operations / IT',capability:'Monitoring; Reliability/Trust; Workflow Runtime',match:'Platform',support:'Fin9 can track workflow execution and exceptions as part of controlled execution.',integrations:'Workflow logs; runtime metrics',gap:'Exact operational dashboard and alert thresholds need configuration.'},
  {id:60,useCase:'Client-specific AI workspace',description:'Provide a controlled workspace containing client-specific agents, workflows, knowledge and documents.',stakeholder:'Enterprise Client / Business Unit / Admin',capability:'Projects; Knowledge Context; RBAC; Private Deployment',match:'Platform',support:'Fin9 can organize client-specific AI execution within controlled project and tenant contexts.',integrations:'Client documents; agents; workflows; permissions',gap:'Workspace information architecture and onboarding process need configuration.'}
];

const capabilities = [
  {category:'Meeting Intelligence',name:'Pre-Meeting Agent / Client Preparation Agent',use:'Advisor briefings, meeting preparation, client context'},
  {category:'Meeting Intelligence',name:'Post-Meeting Agent',use:'Summaries, actions, CRM updates, follow-up drafts'},
  {category:'Wealth',name:'Horizon Market Intelligence',use:'Market and investment research'},
  {category:'Wealth',name:'Wealth360 Analyst',use:'Portfolio/wealth analysis'},
  {category:'Wealth',name:'IB Pitch Architect',use:'Excel/PPT/HTML investment banking pitch workflows'},
  {category:'Wealth',name:'KYC Intelligence Officer / KYC Documents Agent',use:'KYC document collection, extraction, validation and exception handling'},
  {category:'Compliance',name:'NANA Compliance Agents',use:'Compliance-oriented document/review workflows'},
  {category:'Wealth',name:'FP Agent',use:'Financial planning analysis and research skills'},
  {category:'Platform',name:'OneChat',use:'Conversational interface to models, agents and tools'},
  {category:'Platform',name:'Agent Builder',use:'Create specialized AI agents'},
  {category:'Platform',name:'Workflow Builder V2',use:'Build multi-step business workflows'},
  {category:'Platform',name:'Multi-Agent Orchestration',use:'Chain specialized agents across an end-to-end process'},
  {category:'Platform',name:'Skills Directory / SarvaX Foundation Skills',use:'Reusable BRD, RFP, SOP, report, PPT, Excel and document skills'},
  {category:'Platform',name:'Projects & Knowledge Context',use:'Ground agents/workflows in controlled business knowledge'},
  {category:'Platform',name:'Connectors & Integrations',use:'Connect CRM, documents, calendars, communications and enterprise systems'},
  {category:'Platform',name:'Custom MCP Servers / MCP',use:'Extend tool access to client-specific systems'},
  {category:'Platform',name:'Meetings & Calendar Intelligence',use:'Calendar-aware meeting workflows'},
  {category:'Platform',name:'Scheduler',use:'Scheduled and recurring workflow execution'},
  {category:'Platform',name:'Documents / Document Intelligence',use:'Extraction, transformation and document generation'},
  {category:'Platform',name:'HITL Controls',use:'Human approval before sensitive actions'},
  {category:'Platform',name:'RBAC / SSO / Audit',use:'Access control, governance and auditability'},
  {category:'Platform',name:'Monitoring / Reliability / Evaluation',use:'Execution monitoring, QA and evaluation'},
  {category:'Platform',name:'Private Deployment',use:'Controlled enterprise/client deployment'},
  {category:'Platform',name:'Mobile App',use:'Mobile access to Fin9 workspace and agents'},
  {category:'Platform',name:'Browser / Meeting Assistant',use:'Browser-based and meeting-assisted execution'}
];

const matchInfo = {
  Direct: {count: 33, label: 'Direct', note: 'Existing Fin9 agent/product/capability maps closely to the use case.'},
  Partial: {count: 18, label: 'Partial', note: 'Fin9 covers a meaningful portion, but additional configuration, integration or development is needed.'},
  Platform: {count: 9, label: 'Platform', note: 'A Fin9 platform capability can support the use case, but a dedicated solution/agent may need to be configured.'}
};

const state = { filter: 'all', query: '', activeId: null };
const grid = document.getElementById('useCaseGrid');
const catalogGrid = document.getElementById('catalogGrid');
const resultCount = document.getElementById('resultCount');
const searchInput = document.getElementById('searchInput');
const emptyState = document.getElementById('emptyState');
const activeFilters = document.getElementById('activeFilters');
const drawer = document.getElementById('detailDrawer');
const backdrop = document.getElementById('modalBackdrop');

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
}

function matchClass(match) { return match.toLowerCase(); }

function renderSummary() {
  document.getElementById('summaryMetrics').innerHTML = Object.values(matchInfo).map(item => `
    <div class="coverage-metric">
      <div class="metric-count">${String(item.count).padStart(2, '0')}</div>
      <div class="metric-name">${item.label} coverage</div>
      <div class="metric-bar"><span class="metric-fill ${matchClass(item.label)}" style="width:${Math.round(item.count / 60 * 100)}%"></span></div>
    </div>`).join('');
}

function renderCards() {
  const query = state.query.trim().toLowerCase();
  const filtered = useCases.filter(item => {
    const matchesFilter = state.filter === 'all' || item.match === state.filter;
    const haystack = [item.useCase, item.description, item.stakeholder, item.capability, item.match, item.support, item.integrations, item.gap].join(' ').toLowerCase();
    return matchesFilter && (!query || haystack.includes(query));
  });
  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'use case' : 'use cases'}`;
  activeFilters.innerHTML = state.query || state.filter !== 'all' ? `<span class="active-filter">Showing ${state.filter === 'all' ? 'all matches' : state.filter.toLowerCase() + ' matches'}${state.query ? ` for “${escapeHtml(state.query)}”` : ''}</span>` : '';
  emptyState.hidden = filtered.length > 0;
  grid.innerHTML = filtered.map(item => `
    <article class="use-case-card" tabindex="0" data-id="${item.id}" aria-label="Open ${escapeHtml(item.useCase)} details">
      <div class="card-topline"><span class="card-id">${String(item.id).padStart(2, '0')}</span><span class="match-badge ${matchClass(item.match)}">${escapeHtml(item.match)}</span></div>
      <h3 class="card-title">${escapeHtml(item.useCase)}</h3>
      <p class="card-description">${escapeHtml(item.description)}</p>
      <div class="card-footer"><div class="card-stakeholder"><strong>Primary stakeholder</strong>${escapeHtml(item.stakeholder)}</div><button class="card-open" type="button" data-open-id="${item.id}">Open <span>-></span></button></div>
    </article>`).join('');
}

function renderCatalog() {
  catalogGrid.innerHTML = capabilities.map((item, index) => `
    <article class="catalog-card">
      <div class="catalog-number">${String(index + 1).padStart(2, '0')}</div>
      <div class="catalog-domain">${escapeHtml(item.category)}</div>
      <h3 class="catalog-title">${escapeHtml(item.name)}</h3>
      <p class="catalog-use">${escapeHtml(item.use)}</p>
    </article>`).join('');
}

function splitDetails(value) {
  return value.split(';').map(item => item.trim()).filter(Boolean);
}

function openDrawer(id) {
  const item = useCases.find(useCase => useCase.id === Number(id));
  if (!item) return;
  state.activeId = item.id;
  document.getElementById('drawerKicker').textContent = `USE CASE ${String(item.id).padStart(2, '0')}`;
  const match = document.getElementById('drawerMatch');
  match.className = `match-badge ${matchClass(item.match)}`;
  match.textContent = `${item.match} match`;
  document.getElementById('drawerTitle').textContent = item.useCase;
  document.getElementById('drawerDescription').textContent = item.description;
  document.getElementById('drawerMeta').innerHTML = `
    <div class="meta-item"><div class="drawer-label">Primary stakeholder</div><div class="meta-value">${escapeHtml(item.stakeholder)}</div></div>
    <div class="meta-item"><div class="drawer-label">Match type</div><div class="meta-value">${escapeHtml(matchInfo[item.match].note)}</div></div>`;
  document.getElementById('drawerCapabilities').innerHTML = splitDetails(item.capability).map(value => `<span class="capability-chip">${escapeHtml(value)}</span>`).join('');
  document.getElementById('drawerSupport').textContent = item.support;
  document.getElementById('drawerIntegrations').innerHTML = splitDetails(item.integrations).map(value => `<div>${escapeHtml(value)}</div>`).join('');
  document.getElementById('drawerGap').textContent = item.gap;
  const next = useCases.find(useCase => useCase.id === item.id + 1) || useCases[0];
  document.getElementById('drawerNext').innerHTML = `<button type="button" data-next-id="${next.id}">Next use case: ${String(next.id).padStart(2, '0')} / ${escapeHtml(next.useCase)} -></button>`;
  backdrop.hidden = false;
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('drawer-open');
  document.getElementById('closeDrawer').focus();
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  backdrop.hidden = true;
  document.body.classList.remove('drawer-open');
  state.activeId = null;
}

function resetView() {
  state.filter = 'all';
  state.query = '';
  searchInput.value = '';
  document.querySelectorAll('.filter-button').forEach(button => button.classList.toggle('active', button.dataset.filter === 'all'));
  renderCards();
}

document.addEventListener('click', event => {
  const openTarget = event.target.closest('[data-open-id]');
  const cardTarget = event.target.closest('.use-case-card');
  const nextTarget = event.target.closest('[data-next-id]');
  const filterTarget = event.target.closest('[data-filter]');
  if (openTarget) openDrawer(openTarget.dataset.openId);
  else if (cardTarget && !event.target.closest('button')) openDrawer(cardTarget.dataset.id);
  if (nextTarget) openDrawer(nextTarget.dataset.nextId);
  if (filterTarget) {
    state.filter = filterTarget.dataset.filter;
    document.querySelectorAll('.filter-button').forEach(button => button.classList.toggle('active', button === filterTarget));
    renderCards();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && state.activeId) closeDrawer();
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); searchInput.focus(); }
  if (event.key === '/' && document.activeElement !== searchInput && !state.activeId) { event.preventDefault(); searchInput.focus(); }
  if (event.key === 'Enter' && document.activeElement.matches('.use-case-card')) openDrawer(document.activeElement.dataset.id);
});

searchInput.addEventListener('input', event => { state.query = event.target.value; renderCards(); });
document.getElementById('closeDrawer').addEventListener('click', closeDrawer);
backdrop.addEventListener('click', closeDrawer);
document.getElementById('resetAll').addEventListener('click', resetView);
document.getElementById('clearSearch').addEventListener('click', resetView);
document.getElementById('focusSearch').addEventListener('click', () => searchInput.focus());
document.getElementById('openDirect').addEventListener('click', () => {
  state.filter = 'Direct';
  document.querySelectorAll('.filter-button').forEach(button => button.classList.toggle('active', button.dataset.filter === 'Direct'));
  renderCards();
  document.getElementById('use-cases').scrollIntoView({behavior:'smooth'});
});

renderSummary();
renderCards();
renderCatalog();
