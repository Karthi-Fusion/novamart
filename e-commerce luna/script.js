/* ==========================================================================
   Online Store Infrastructure - Master DevOps & Cloud Control Center JS
   Vanilla JavaScript Engine (Zero external dependencies)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. STATE MANAGEMENT ---
  const state = {
    currentVersion: 'v2.4.1',
    systemStatus: 'OPERATIONAL',
    isLogPaused: false,
    logEntries: [],
    notifications: [
      { id: 1, type: 'SUCCESS', title: 'Deployment v2.4.1', desc: 'Production release completed successfully.', time: '2m ago', read: false },
      { id: 2, type: 'WARNING', title: 'High CPU Spike', desc: 'Node 02 CPU reached 78% threshold briefly.', time: '14m ago', read: false },
      { id: 3, type: 'INFO', title: 'Snapshot Backup', desc: 'Daily automated database snapshot stored.', time: '1h ago', read: false }
    ],
    servers: [
      { name: 'Production Server 01', role: 'API & Web App', status: 'Online', cpu: 42, memory: 61, storage: 48, uptime: '99.98%', health: 'Healthy' },
      { name: 'Production Server 02', role: 'Background Workers', status: 'Online', cpu: 38, memory: 55, storage: 45, uptime: '99.97%', health: 'Healthy' },
      { name: 'Monitoring Node 01', role: 'Prometheus / Grafana', status: 'Online', cpu: 21, memory: 40, storage: 31, uptime: '100%', health: 'Healthy' }
    ],
    incidents: [
      { id: 'INC-1042', summary: 'High CPU Spike on Worker Pods', severity: 'MEDIUM', status: 'Resolved', time: '10:30 AM', duration: '12 min' },
      { id: 'INC-1041', summary: 'Staging Pipeline Timeout', severity: 'HIGH', status: 'Resolved', time: '09:15 AM', duration: '18 min' },
      { id: 'INC-1040', summary: 'Database Connection Pool Near Limit', severity: 'LOW', status: 'Resolved', time: 'Yesterday', duration: '5 min' }
    ],
    deploymentHistory: [
      { version: 'v2.4.1', status: 'Success', time: 'Today, 12:40 PM', duration: '2m 14s', author: 'Deploy Engineer' },
      { version: 'v2.4.0', status: 'Success', time: 'Yesterday, 04:15 PM', duration: '1m 58s', author: 'DevOps Bot' },
      { version: 'v2.3.9', status: 'Success', time: '2 days ago', duration: '2m 31s', author: 'Deploy Engineer' }
    ],
    documentation: [
      {
        id: 'overview',
        title: 'Project Overview',
        category: 'Architecture',
        content: `<h3>Online Store Infrastructure Overview</h3><p>This control center manages the high-availability production deployment for our enterprise e-commerce platform. It coordinates containerized microservices, CI/CD pipelines, real-time telemetry monitoring, automated disaster recovery, and multi-tier security firewalls.</p>`
      },
      {
        id: 'architecture',
        title: 'Infrastructure Architecture',
        category: 'Architecture',
        content: `<h3>Cloud Infrastructure Design</h3><p>Our architecture utilizes an elastic Kubernetes container cluster fronted by AWS CloudFront CDN and Cloudflare Enterprise WAF. Ingress controllers route incoming HTTP/2 & gRPC traffic across load-balanced pods with automated Pod Autoscaling (HPA).</p>`
      },
      {
        id: 'hosting',
        title: 'Hosting & Cloud Setup',
        category: 'Infrastructure',
        content: `<h3>Multi-Region Hosting Strategy</h3><p>Hosted across Multi-Availability Zone (AZ) cloud regions to guarantee 99.98% uptime SLA. Database clusters run in primary/secondary read-replica configurations with automated failover.</p>`
      },
      {
        id: 'deployment',
        title: 'Production Deployment Strategy',
        category: 'Deployment',
        content: `<h3>Blue/Green Zero-Downtime Releases</h3><p>Deployments execute without service disruption. Traffic shifts gradually from Green to Blue environments following automated health check validations.</p>`
      },
      {
        id: 'cicd',
        title: 'CI/CD Automated Pipeline',
        category: 'CI/CD',
        content: `<h3>Continuous Integration & Delivery</h3><p>Every git commit triggers container build, automated unit tests, lint checks, SAST security scans, and staging validation before automated production release promotion.</p>`
      },
      {
        id: 'monitoring',
        title: 'Monitoring & Telemetry',
        category: 'Monitoring',
        content: `<h3>Real-Time Observability</h3><p>Metrics collected via Prometheus & Grafana agents every 2 seconds. Automated alert managers trigger PagerDuty notifications if CPU, Memory, or Error rates breach thresholds.</p>`
      },
      {
        id: 'security',
        title: 'Security Architecture',
        category: 'Security',
        content: `<h3>Defense-in-Depth Security</h3><p>Enforces zero-trust RBAC access controls, TLS 1.3 encryption in transit, AES-256 at rest, HashiCorp Vault secrets management, and DDoS protection.</p>`
      },
      {
        id: 'backup',
        title: 'Backup & Recovery Procedures',
        category: 'Disaster Recovery',
        content: `<h3>RTO & RPO Strategy</h3><p>Automated database snapshots taken every hour. Point-in-time recovery (PITR) ensures a Recovery Point Objective (RPO) under 5 minutes and Recovery Time Objective (RTO) under 15 minutes.</p>`
      },
      {
        id: 'rollback',
        title: 'Deployment Rollback Protocol',
        category: 'Deployment',
        content: `<h3>Emergency Rollback Execution</h3><p>If post-deployment error rates exceed 0.5%, automated rollback instantly redirects ingress traffic to the previous stable release version within 10 seconds.</p>`
      },
      {
        id: 'troubleshooting',
        title: 'Troubleshooting Guide',
        category: 'Support',
        content: `<h3>Common Diagnostic Steps</h3><p>1. Check live log streams for ERROR codes.<br>2. Inspect CPU & RAM metric graphs.<br>3. Verify Pod restart counters.<br>4. Trigger node failover test if instance degrades.</p>`
      }
    ]
  };

  // --- 2. INITIAL SPLASH ANIMATION ---
  const splashScreen = document.getElementById('splash-screen');
  const splashBar = document.getElementById('splash-bar');
  if (splashBar) {
    splashBar.style.width = '100%';
    setTimeout(() => {
      if (splashScreen) splashScreen.classList.add('hidden');
    }, 1100);
  }

  // --- 3. LIVE CLOCK ENGINE ---
  function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const clockEl = document.getElementById('live-clock');
    if (clockEl) {
      clockEl.textContent = `Last checked: ${timeStr}`;
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  // --- 4. SPA NAVIGATION ROUTING ---
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.dashboard-section');
  const mobileToggle = document.getElementById('mobile-toggle');
  const sidebar = document.getElementById('sidebar');

  function switchTab(targetId) {
    navItems.forEach(item => {
      if (item.getAttribute('data-target') === targetId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    sections.forEach(sec => {
      if (sec.id === `sec-${targetId}`) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });

    if (sidebar && sidebar.classList.contains('mobile-open')) {
      sidebar.classList.remove('mobile-open');
    }

    // Trigger chart render if switching to monitoring/performance/security
    setTimeout(() => {
      renderCharts();
    }, 50);
  }

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const target = item.getAttribute('data-target');
      switchTab(target);
    });
  });

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
    });
  }

  // --- 5. LOG CONSOLE DRAWER ENGINE ---
  const logDrawer = document.getElementById('log-drawer');
  const logDrawerHeader = document.getElementById('log-drawer-header');
  const logConsoleBody = document.getElementById('log-console-body');
  const logBtnPause = document.getElementById('log-btn-pause');
  const logBtnClear = document.getElementById('log-btn-clear');
  const logBtnDownload = document.getElementById('log-btn-download');

  if (logDrawerHeader) {
    logDrawerHeader.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      logDrawer.classList.toggle('collapsed');
    });
  }

  function addLog(level, message) {
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
    const logLine = { timestamp, level, message };
    state.logEntries.push(logLine);

    if (state.isLogPaused) return;

    if (logConsoleBody) {
      const lineEl = document.createElement('div');
      lineEl.className = `log-line ${level}`;
      lineEl.innerHTML = `<span class="timestamp">[${timestamp}]</span> <span class="level">${level}</span> - ${message}`;
      logConsoleBody.appendChild(lineEl);
      logConsoleBody.scrollTop = logConsoleBody.scrollHeight;
    }
  }

  // Initial setup log entries
  addLog('INFO', 'Production Control Center initialized successfully.');
  addLog('SUCCESS', 'Deployment v2.4.1 health checks passed. All pods operational.');
  addLog('INFO', 'Prometheus monitoring telemetry metrics streaming active.');

  if (logBtnPause) {
    logBtnPause.addEventListener('click', () => {
      state.isLogPaused = !state.isLogPaused;
      logBtnPause.textContent = state.isLogPaused ? 'Resume' : 'Pause';
      logBtnPause.classList.toggle('btn-primary', state.isLogPaused);
      addLog('INFO', state.isLogPaused ? 'Log stream paused by user.' : 'Log stream resumed.');
    });
  }

  if (logBtnClear) {
    logBtnClear.addEventListener('click', () => {
      if (logConsoleBody) logConsoleBody.innerHTML = '';
      state.logEntries = [];
      addLog('INFO', 'Log console cleared.');
    });
  }

  if (logBtnDownload) {
    logBtnDownload.addEventListener('click', () => {
      const content = state.logEntries.map(l => `[${l.timestamp}] ${l.level} - ${l.message}`).join('\n');
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `storeops_production_logs_${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      addLog('SUCCESS', 'Downloaded live system log file to local disk.');
    });
  }

  // --- 6. NOTIFICATIONS ENGINE ---
  const notifToggle = document.getElementById('btn-notification-toggle');
  const notifPanel = document.getElementById('notif-panel');
  const notifCount = document.getElementById('notif-count');
  const notifListContainer = document.getElementById('notif-list-container');
  const btnClearNotifs = document.getElementById('btn-clear-notifs');

  function renderNotifications() {
    if (!notifListContainer) return;
    notifListContainer.innerHTML = '';
    const unread = state.notifications.filter(n => !n.read).length;
    if (notifCount) notifCount.textContent = unread;

    if (state.notifications.length === 0) {
      notifListContainer.innerHTML = '<div style="color:var(--text-muted); font-size:0.8rem; text-align:center; padding:12px;">No active notifications</div>';
      return;
    }

    state.notifications.forEach(n => {
      const item = document.createElement('div');
      item.style.cssText = 'background:rgba(255,255,255,0.03); border:1px solid var(--border-subtle); padding:10px; border-radius:var(--radius-md); font-size:0.8rem;';
      item.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
          <strong style="color:var(--text-bright);">${n.title}</strong>
          <span style="color:var(--text-muted); font-size:0.7rem;">${n.time}</span>
        </div>
        <div style="color:var(--text-muted);">${n.desc}</div>
      `;
      notifListContainer.appendChild(item);
    });
  }

  if (notifToggle) {
    notifToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (notifPanel) {
        const isVisible = notifPanel.style.display === 'block';
        notifPanel.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) {
          state.notifications.forEach(n => n.read = true);
          renderNotifications();
        }
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (notifPanel && !notifPanel.contains(e.target) && e.target !== notifToggle) {
      notifPanel.style.display = 'none';
    }
  });

  if (btnClearNotifs) {
    btnClearNotifs.addEventListener('click', () => {
      state.notifications = [];
      renderNotifications();
      addLog('INFO', 'Notification history cleared.');
    });
  }

  renderNotifications();

  // --- 7. RECENT ACTIVITY STREAM (OVERVIEW) ---
  const overviewActivityStream = document.getElementById('overview-activity-stream');
  function populateActivityStream() {
    if (!overviewActivityStream) return;
    const activities = [
      { text: 'Deployment v2.4.1 completed successfully', time: '2m ago', badge: 'badge-success' },
      { text: 'Health check passed for all 3 production server nodes', time: '5m ago', badge: 'badge-success' },
      { text: 'Automated Snapshot Backup stored in S3', time: '1h ago', badge: 'badge-info' },
      { text: 'Security vulnerability scan completed (0 criticals)', time: '3h ago', badge: 'badge-info' },
      { text: 'Monitoring alert resolved: CPU back below 50%', time: '5h ago', badge: 'badge-warning' }
    ];
    overviewActivityStream.innerHTML = activities.map(a => `
      <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.2); padding:10px 14px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); font-size:0.82rem;">
        <div>${a.text}</div>
        <span class="badge ${a.badge}" style="font-size:0.68rem;">${a.time}</span>
      </div>
    `).join('');
  }
  populateActivityStream();

  // --- 8. SERVER HEALTH TABLE POPULATION ---
  const serverHealthTbody = document.querySelector('#server-health-table tbody');
  function renderServerHealthTable() {
    if (!serverHealthTbody) return;
    serverHealthTbody.innerHTML = state.servers.map(s => `
      <tr style="cursor:pointer;" onclick="window.showServerDetail('${s.name}')">
        <td><strong>${s.name}</strong></td>
        <td style="color:var(--text-muted);">${s.role}</td>
        <td><span class="badge ${s.status === 'Online' ? 'badge-success' : 'badge-danger'}">${s.status}</span></td>
        <td class="mono">${s.cpu}%</td>
        <td class="mono">${s.memory}%</td>
        <td class="mono">${s.storage}%</td>
        <td class="mono">${s.uptime}</td>
        <td><span class="badge ${s.health === 'Healthy' ? 'badge-success' : 'badge-warning'}">${s.health}</span></td>
      </tr>
    `).join('');
  }
  renderServerHealthTable();

  window.showServerDetail = function(serverName) {
    const s = state.servers.find(srv => srv.name === serverName);
    if (!s) return;
    openModal(`Server Node Details: ${s.name}`, `
      <div style="display:flex; flex-direction:column; gap:12px; font-size:0.9rem;">
        <div><strong>Role:</strong> ${s.role}</div>
        <div><strong>Status:</strong> <span class="badge badge-success">${s.status}</span></div>
        <div><strong>CPU Utilization:</strong> ${s.cpu}%</div>
        <div><strong>Memory Usage:</strong> ${s.memory}%</div>
        <div><strong>Storage Capacity:</strong> ${s.storage}%</div>
        <div><strong>Uptime SLA:</strong> ${s.uptime}</div>
        <div><strong>IP Address:</strong> 10.244.0.${Math.floor(Math.random()*200+10)}</div>
        <div><strong>Kernel:</strong> Linux 5.15.0-88-generic x86_64</div>
      </div>
    `);
  };

  // --- 9. DEPLOYMENT & CI/CD STAGES ---
  const deploymentStagesGrid = document.getElementById('deployment-stages-grid');
  const stages = [
    { title: '1. Source Verification', status: 'Completed', time: '12:40:02 PM' },
    { title: '2. Configuration Check', status: 'Completed', time: '12:40:15 PM' },
    { title: '3. Build & Compilation', status: 'Completed', time: '12:40:45 PM' },
    { title: '4. Automated Testing', status: 'Completed', time: '12:41:20 PM' },
    { title: '5. Staging Validation', status: 'Completed', time: '12:41:50 PM' },
    { title: '6. Production Deployment', status: 'Completed', time: '12:42:10 PM' },
    { title: '7. Health Check Verification', status: 'Completed', time: '12:42:14 PM' },
    { title: '8. Telemetry Monitoring', status: 'Active', time: '12:42:18 PM' }
  ];

  function renderDeploymentStages() {
    if (!deploymentStagesGrid) return;
    deploymentStagesGrid.innerHTML = stages.map(st => `
      <div style="background:rgba(0,0,0,0.25); border:1px solid var(--border-subtle); padding:12px; border-radius:var(--radius-md);">
        <div style="font-size:0.8rem; font-weight:600; color:var(--text-bright); mb-1">${st.title}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px;">
          <span class="badge badge-success" style="font-size:0.65rem;">✓ ${st.status}</span>
          <span style="font-size:0.7rem; color:var(--text-dim);" class="mono">${st.time}</span>
        </div>
      </div>
    `).join('');
  }
  renderDeploymentStages();

  const deploymentHistoryTbody = document.getElementById('deployment-history-tbody');
  function renderDeploymentHistory() {
    if (!deploymentHistoryTbody) return;
    deploymentHistoryTbody.innerHTML = state.deploymentHistory.map(dh => `
      <tr>
        <td class="mono" style="font-weight:700; color:var(--cyan-primary);">${dh.version}</td>
        <td><span class="badge badge-success">✓ ${dh.status}</span></td>
        <td>${dh.time}</td>
        <td class="mono">${dh.duration}</td>
        <td>${dh.author}</td>
        <td><button class="btn btn-secondary btn-sm" onclick="window.viewDeployLogs('${dh.version}')">Logs</button></td>
      </tr>
    `).join('');
  }
  renderDeploymentHistory();

  window.viewDeployLogs = function(version) {
    openModal(`Deployment Build Logs: ${version}`, `
      <pre style="background:#050811; padding:16px; border-radius:var(--radius-md); font-family:var(--font-mono); font-size:0.78rem; max-height:300px; overflow-y:auto; color:var(--text-main);">
[00:00:01] Preparing environment workspace for ${version}
[00:00:04] Pulling git commit refs/heads/main (SHA: a7f93b2)
[00:00:12] Compiling assets & bundle optimization
[00:00:45] Executing test suite: 142 passed, 0 failed
[00:01:20] Pushing Docker image to Elastic Container Registry (ECR)
[00:01:50] Rolling update triggered on Kubernetes cluster
[00:02:14] Zero-downtime deployment finished cleanly.
      </pre>
    `);
  };

  // --- 10. SIMULATIONS (DEPLOY, ROLLBACK, PIPELINE, SCALE, BACKUP, FAILOVER) ---

  // Modal Utility
  const globalModal = document.getElementById('global-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openModal(title, htmlContent) {
    if (modalTitle) modalTitle.textContent = title;
    if (modalBody) modalBody.innerHTML = htmlContent;
    if (globalModal) globalModal.classList.add('active');
  }

  function closeModal() {
    if (globalModal) globalModal.classList.remove('active');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (globalModal) {
    globalModal.addEventListener('click', (e) => {
      if (e.target === globalModal) closeModal();
    });
  }

  // Deploy Version Simulation
  const btnDeployTrigger = document.getElementById('btn-deploy-trigger');
  if (btnDeployTrigger) {
    btnDeployTrigger.addEventListener('click', () => {
      openModal('Production Deployment Confirmation', `
        <p style="margin-bottom:16px; color:var(--text-muted);">Are you sure you want to trigger a production release of version <strong>v2.4.2</strong>?</p>
        <div style="display:flex; justify-content:flex-end; gap:12px;">
          <button class="btn btn-secondary" onclick="window.closeModal()">Cancel</button>
          <button class="btn btn-primary" id="btn-confirm-deploy">Start Deployment</button>
        </div>
      `);

      setTimeout(() => {
        const confirmBtn = document.getElementById('btn-confirm-deploy');
        if (confirmBtn) {
          confirmBtn.addEventListener('click', () => {
            runDeploySimulation();
          });
        }
      }, 50);
    });
  }

  window.closeModal = closeModal;

  function runDeploySimulation() {
    openModal('Deploying Version v2.4.2', `
      <div style="display:flex; flex-direction:column; gap:16px;">
        <div style="font-size:0.9rem; color:var(--cyan-primary);" id="sim-deploy-status">Initializing deployment sequence...</div>
        <div class="progress-bar-wrap"><div class="progress-fill" id="sim-deploy-progress" style="width:5%;"></div></div>
        <div id="sim-deploy-steps" style="font-family:var(--font-mono); font-size:0.75rem; background:#050811; padding:12px; border-radius:var(--radius-md); max-height:160px; overflow-y:auto; color:var(--text-muted);">
          [00:01] Verification phase started...
        </div>
      </div>
    `);

    const statusEl = document.getElementById('sim-deploy-status');
    const progEl = document.getElementById('sim-deploy-progress');
    const stepsEl = document.getElementById('sim-deploy-steps');

    const steps = [
      { pct: 20, msg: '[00:04] Source code verification passed.', status: 'Building artifacts...' },
      { pct: 45, msg: '[00:12] Build container created. Running unit tests...', status: 'Testing code base...' },
      { pct: 70, msg: '[00:25] 142/142 tests passed. Staging validation successful.', status: 'Deploying to Kubernetes cluster...' },
      { pct: 90, msg: '[00:38] Rolling update applied. Running pod health checks...', status: 'Verifying endpoints...' },
      { pct: 100, msg: '[00:45] Health checks passed. Production deployment complete!', status: 'Deployment Successful!' }
    ];

    let idx = 0;
    const interval = setInterval(() => {
      if (idx < steps.length) {
        const step = steps[idx];
        if (progEl) progEl.style.width = `${step.pct}%`;
        if (statusEl) statusEl.textContent = step.status;
        if (stepsEl) {
          stepsEl.innerHTML += `<br>${step.msg}`;
          stepsEl.scrollTop = stepsEl.scrollHeight;
        }
        addLog('INFO', step.msg);
        idx++;
      } else {
        clearInterval(interval);
        state.currentVersion = 'v2.4.2';
        const tagEl = document.getElementById('current-version-tag');
        const timeEl = document.getElementById('current-version-time');
        if (tagEl) tagEl.textContent = 'v2.4.2';
        if (timeEl) timeEl.textContent = 'Deployed: Just now';

        state.deploymentHistory.unshift({
          version: 'v2.4.2',
          status: 'Success',
          time: 'Just now',
          duration: '0m 45s',
          author: 'Deploy Engineer'
        });
        renderDeploymentHistory();
        addLog('SUCCESS', 'Production deployment v2.4.2 completed cleanly!');

        setTimeout(() => {
          openModal('Deployment Successful', `
            <div style="text-align:center; padding:16px;">
              <div style="font-size:3rem; margin-bottom:12px;">🚀</div>
              <h3>Production Version v2.4.2 Active</h3>
              <p style="color:var(--text-muted); margin-top:8px;">Zero-downtime deployment finished cleanly across all cluster pods.</p>
              <button class="btn btn-primary" style="margin-top:20px;" onclick="window.closeModal()">Close</button>
            </div>
          `);
        }, 600);
      }
    }, 700);
  }

  // Rollback Simulation
  const btnRollbackTrigger = document.getElementById('btn-rollback-trigger');
  if (btnRollbackTrigger) {
    btnRollbackTrigger.addEventListener('click', () => {
      openModal('Confirm Version Rollback', `
        <p style="margin-bottom:16px; color:var(--text-muted);">Revert production release from <strong>${state.currentVersion}</strong> back to <strong>v2.4.0</strong>?</p>
        <div style="display:flex; justify-content:flex-end; gap:12px;">
          <button class="btn btn-secondary" onclick="window.closeModal()">Cancel</button>
          <button class="btn btn-danger" id="btn-confirm-rollback">Execute Rollback</button>
        </div>
      `);

      setTimeout(() => {
        const confirmBtn = document.getElementById('btn-confirm-rollback');
        if (confirmBtn) {
          confirmBtn.addEventListener('click', () => {
            state.currentVersion = 'v2.4.0';
            const tagEl = document.getElementById('current-version-tag');
            const timeEl = document.getElementById('current-version-time');
            if (tagEl) tagEl.textContent = 'v2.4.0';
            if (timeEl) timeEl.textContent = 'Rolled back: Just now';

            addLog('WARN', 'Emergency rollback executed! Traffic reverted to v2.4.0.');
            openModal('Rollback Executed', `
              <div style="text-align:center; padding:16px;">
                <div style="font-size:3rem; margin-bottom:12px;">⚠️</div>
                <h3>Version Rolled Back to v2.4.0</h3>
                <p style="color:var(--text-muted); margin-top:8px;">Ingress traffic redirected back to release v2.4.0 image target.</p>
                <button class="btn btn-primary" style="margin-top:20px;" onclick="window.closeModal()">Close</button>
              </div>
            `);
          });
        }
      }, 50);
    });
  }

  // Run CI/CD Pipeline Simulation
  const btnRunPipeline = document.getElementById('btn-run-pipeline');
  const cicdNodesContainer = document.getElementById('cicd-pipeline-nodes');
  const pipelineStatusBadge = document.getElementById('pipeline-status-badge');

  const cicdStages = [
    { code: 'COMMIT', label: 'Code Commit' },
    { code: 'BUILD', label: 'Build' },
    { code: 'TEST', label: 'Test' },
    { code: 'VAL', label: 'Validation' },
    { code: 'DEPLOY', label: 'Deployment' },
    { code: 'HEALTH', label: 'Health Check' },
    { code: 'MONITOR', label: 'Monitoring' }
  ];

  function renderPipelineNodes(activeIdx = -1) {
    if (!cicdNodesContainer) return;
    cicdNodesContainer.innerHTML = cicdStages.map((st, i) => `
      <div class="workflow-step ${i <= activeIdx ? 'active' : ''}">
        <div class="workflow-node">${st.code}</div>
        <div class="workflow-label">${st.label} ${i <= activeIdx ? '✓' : ''}</div>
      </div>
      ${i < cicdStages.length - 1 ? '<div class="workflow-connector"></div>' : ''}
    `).join('');
  }
  renderPipelineNodes(6);

  if (btnRunPipeline) {
    btnRunPipeline.addEventListener('click', () => {
      btnRunPipeline.disabled = true;
      if (pipelineStatusBadge) {
        pipelineStatusBadge.textContent = 'Pipeline Running...';
        pipelineStatusBadge.className = 'badge badge-warning';
      }
      addLog('INFO', 'Triggered manual CI/CD pipeline build job #482...');

      let currentStage = 0;
      const pipelineInterval = setInterval(() => {
        renderPipelineNodes(currentStage);
        addLog('INFO', `CI/CD Pipeline Stage passed: ${cicdStages[currentStage].label}`);
        currentStage++;

        if (currentStage >= cicdStages.length) {
          clearInterval(pipelineInterval);
          btnRunPipeline.disabled = false;
          if (pipelineStatusBadge) {
            pipelineStatusBadge.textContent = 'Pipeline Completed Successfully';
            pipelineStatusBadge.className = 'badge badge-success';
          }
          addLog('SUCCESS', 'CI/CD Pipeline Completed Successfully!');
        }
      }, 700);
    });
  }

  // Scale Infrastructure Simulation
  const btnScaleTrigger = document.getElementById('btn-scale-trigger');
  const nodesVisualContainer = document.getElementById('nodes-visual-container');
  const nodesCountBadge = document.getElementById('nodes-count-badge');
  const valClusterCapacity = document.getElementById('val-cluster-capacity');

  let activeNodesCount = 3;
  function renderTopologyNodes() {
    if (!nodesVisualContainer) return;
    nodesVisualContainer.innerHTML = '';
    for (let i = 1; i <= activeNodesCount; i++) {
      const nodeCard = document.createElement('div');
      nodeCard.style.cssText = 'background:rgba(15,23,42,0.9); border:1px solid var(--cyan-primary); border-radius:var(--radius-md); padding:16px; flex:1; min-width:180px; box-shadow:var(--shadow-glow); animation:fadeIn 0.4s ease;';
      nodeCard.innerHTML = `
        <div style="font-weight:700; color:var(--text-bright); margin-bottom:4px;">App Server Node 0${i}</div>
        <div style="font-size:0.75rem; color:var(--text-muted);">Pod Replicas: 4/4 Active</div>
        <div style="margin-top:10px;"><span class="badge badge-success">● HEALTHY</span></div>
      `;
      nodesVisualContainer.appendChild(nodeCard);
    }
    if (nodesCountBadge) nodesCountBadge.textContent = `${activeNodesCount} Nodes Provisioned`;
    if (valClusterCapacity) {
      const cap = Math.max(35, Math.floor(68 - (activeNodesCount - 3) * 12));
      valClusterCapacity.textContent = `${cap}%`;
    }
  }
  renderTopologyNodes();

  if (btnScaleTrigger) {
    btnScaleTrigger.addEventListener('click', () => {
      activeNodesCount++;
      renderTopologyNodes();
      addLog('SUCCESS', `Scaled Out Infrastructure: App Server Node 0${activeNodesCount} provisioned.`);
    });
  }

  // High Availability Node Failover Simulation
  const btnSimulateFailover = document.getElementById('btn-simulate-failover');
  const haNodesFlow = document.getElementById('ha-nodes-flow');
  const haStatusBadge = document.getElementById('ha-topology-status');
  let isFailoverActive = false;

  function renderHAFlow() {
    if (!haNodesFlow) return;
    haNodesFlow.innerHTML = `
      <div style="text-align:center; padding:16px; background:rgba(0,0,0,0.3); border:1px solid var(--border-subtle); border-radius:var(--radius-md); width:140px;">
        <div style="font-size:1.5rem;">🌐</div>
        <div style="font-size:0.8rem; font-weight:700; margin-top:4px;">Ingress LB</div>
        <div style="font-size:0.7rem; color:var(--emerald-success);">Routing Traffic</div>
      </div>
      <div style="font-size:1.5rem; color:var(--cyan-primary);">➔</div>
      <div style="text-align:center; padding:16px; background:rgba(0,0,0,0.3); border:1px solid var(--border-subtle); border-radius:var(--radius-md); width:140px;">
        <div style="font-size:1.5rem;">🖥️</div>
        <div style="font-size:0.8rem; font-weight:700; margin-top:4px;">Node 01 (AZ-A)</div>
        <div style="font-size:0.7rem; color:var(--emerald-success);">Primary Online</div>
      </div>
      <div style="font-size:1.5rem; color:${isFailoverActive ? 'var(--rose-danger)' : 'var(--cyan-primary)'};">➔</div>
      <div style="text-align:center; padding:16px; background:${isFailoverActive ? 'rgba(239,68,68,0.15)' : 'rgba(0,0,0,0.3)'}; border:1px solid ${isFailoverActive ? 'var(--rose-danger)' : 'var(--border-subtle)'}; border-radius:var(--radius-md); width:140px;">
        <div style="font-size:1.5rem;">${isFailoverActive ? '💥' : '🖥️'}</div>
        <div style="font-size:0.8rem; font-weight:700; margin-top:4px;">Node 02 (AZ-B)</div>
        <div style="font-size:0.7rem; color:${isFailoverActive ? 'var(--rose-danger)' : 'var(--emerald-success)'};">${isFailoverActive ? 'FAILED / REROUTED' : 'Secondary Online'}</div>
      </div>
    `;
  }
  renderHAFlow();

  if (btnSimulateFailover) {
    btnSimulateFailover.addEventListener('click', () => {
      isFailoverActive = !isFailoverActive;
      renderHAFlow();
      if (haStatusBadge) {
        haStatusBadge.textContent = isFailoverActive ? 'AZ-B Failover Active' : 'All Nodes Healthy';
        haStatusBadge.className = isFailoverActive ? 'badge badge-danger' : 'badge badge-success';
      }
      btnSimulateFailover.textContent = isFailoverActive ? 'Restore Node 02' : 'Simulate Node Failure';
      btnSimulateFailover.className = isFailoverActive ? 'btn btn-primary' : 'btn btn-danger';

      if (isFailoverActive) {
        addLog('ERROR', 'CRITICAL: Node 02 (AZ-B) outage simulated! Load balancer automatically rerouted 100% traffic to AZ-A Node 01.');
      } else {
        addLog('SUCCESS', 'Node 02 recovered. High availability traffic re-balanced across AZs.');
      }
    });
  }

  // Backup & Recovery Simulations
  const btnRunBackup = document.getElementById('btn-run-backup');
  const valLastBackup = document.getElementById('val-last-backup');
  const backupHistoryList = document.getElementById('backup-history-list');

  const backups = [
    { type: 'Daily Snapshot', time: 'Today, 11:45 AM', size: '14.2 GB', status: 'Passed' },
    { type: 'Weekly Full Backup', time: 'Aug 10, 2026', size: '82.6 GB', status: 'Passed' },
    { type: 'Point-in-Time Recovery log', time: 'Continuous', size: '1.2 GB/h', status: 'Active' }
  ];

  function renderBackups() {
    if (!backupHistoryList) return;
    backupHistoryList.innerHTML = backups.map(b => `
      <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.2); padding:10px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); font-size:0.82rem;">
        <div>
          <strong>${b.type}</strong>
          <div style="color:var(--text-muted); font-size:0.75rem;">${b.time} (${b.size})</div>
        </div>
        <span class="badge badge-success">✓ ${b.status}</span>
      </div>
    `).join('');
  }
  renderBackups();

  if (btnRunBackup) {
    btnRunBackup.addEventListener('click', () => {
      openModal('Executing Snapshot Backup', `
        <div style="display:flex; flex-direction:column; gap:16px;">
          <div>Creating encrypted S3 storage snapshot...</div>
          <div class="progress-bar-wrap"><div class="progress-fill" id="backup-sim-bar" style="width:10%;"></div></div>
        </div>
      `);

      const bar = document.getElementById('backup-sim-bar');
      let p = 10;
      const bInt = setInterval(() => {
        p += 25;
        if (bar) bar.style.width = `${p}%`;
        if (p >= 100) {
          clearInterval(bInt);
          if (valLastBackup) valLastBackup.textContent = 'Today, Just now';
          backups.unshift({ type: 'Manual Snapshot', time: 'Just now', size: '14.3 GB', status: 'Passed' });
          renderBackups();
          addLog('SUCCESS', 'Snapshot backup completed and verified cleanly.');
          openModal('Backup Complete', `
            <div style="text-align:center; padding:16px;">
              <div style="font-size:3rem; margin-bottom:12px;">📦</div>
              <h3>Storage Snapshot Saved</h3>
              <p style="color:var(--text-muted); margin-top:8px;">Snapshot verified with AES-256 encryption checksum.</p>
              <button class="btn btn-primary" style="margin-top:20px;" onclick="window.closeModal()">Close</button>
            </div>
          `);
        }
      }, 400);
    });
  }

  const btnTestRecovery = document.getElementById('btn-test-recovery');
  if (btnTestRecovery) {
    btnTestRecovery.addEventListener('click', () => {
      openModal('Disaster Recovery Verification Test', `
        <div style="font-size:0.9rem; line-height:1.6;">
          <div style="margin-bottom:12px;">Running automated Disaster Recovery Sandbox validation...</div>
          <div style="background:#050811; padding:12px; border-radius:var(--radius-md); font-family:var(--font-mono); font-size:0.78rem; color:var(--text-muted);">
            [✓] Mounting recovery volume snapshot...<br>
            [✓] Database integrity check passed (0 corruption errors)<br>
            [✓] RTO Benchmark: 12 minutes (Target: < 15 min)<br>
            [✓] RPO Benchmark: 2 minutes (Target: < 5 min)<br>
            <span style="color:var(--emerald-success);">[✓] DISASTER RECOVERY READINESS VERIFIED 100%</span>
          </div>
          <button class="btn btn-primary" style="margin-top:20px; width:100%;" onclick="window.closeModal()">Done</button>
        </div>
      `);
      addLog('INFO', 'Disaster Recovery Readiness audit executed successfully.');
    });
  }

  // Incident Management Data Render
  const incidentsTbody = document.getElementById('incidents-tbody');
  function renderIncidents() {
    if (!incidentsTbody) return;
    incidentsTbody.innerHTML = state.incidents.map(inc => `
      <tr style="cursor:pointer;" onclick="window.showIncidentModal('${inc.id}')">
        <td class="mono" style="font-weight:700; color:var(--cyan-primary);">${inc.id}</td>
        <td>${inc.summary}</td>
        <td><span class="badge ${inc.severity === 'HIGH' ? 'badge-danger' : inc.severity === 'MEDIUM' ? 'badge-warning' : 'badge-info'}">${inc.severity}</span></td>
        <td><span class="badge badge-success">✓ ${inc.status}</span></td>
        <td>${inc.time}</td>
        <td class="mono">${inc.duration}</td>
      </tr>
    `).join('');
  }
  renderIncidents();

  window.showIncidentModal = function(id) {
    const inc = state.incidents.find(i => i.id === id);
    if (!inc) return;
    openModal(`Incident Lifecycle: ${inc.id}`, `
      <div>
        <h4>${inc.summary}</h4>
        <div style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">Reported: ${inc.time} | Resolution Time: ${inc.duration}</div>

        <div class="lifecycle-stepper">
          <div class="lifecycle-step completed"><div class="lifecycle-circle">1</div><div class="lifecycle-step-label">Detect</div></div>
          <div class="lifecycle-step completed"><div class="lifecycle-circle">2</div><div class="lifecycle-step-label">Analyze</div></div>
          <div class="lifecycle-step completed"><div class="lifecycle-circle">3</div><div class="lifecycle-step-label">Respond</div></div>
          <div class="lifecycle-step completed"><div class="lifecycle-circle">4</div><div class="lifecycle-step-label">Recover</div></div>
          <div class="lifecycle-step completed"><div class="lifecycle-circle">5</div><div class="lifecycle-step-label">Review</div></div>
          <div class="lifecycle-step completed"><div class="lifecycle-circle">6</div><div class="lifecycle-step-label">Prevent</div></div>
        </div>

        <div style="background:rgba(0,0,0,0.3); padding:12px; border-radius:var(--radius-md); font-size:0.85rem; margin-top:16px;">
          <strong>Post-Mortem Summary:</strong> Automated autoscaler provisioned 2 additional node replicas. Root cause resolved through configuration patch PR #139.
        </div>
      </div>
    `);
  };

  // --- 11. ARCHITECTURE DETAILS MODAL ---
  const archCards = document.querySelectorAll('.arch-card');
  const archDescriptions = {
    dev: { title: 'Developer Workstation', desc: 'Engineers commit code changes to topic branches protected by required pull request reviews and pre-commit hooks.' },
    repo: { title: 'Source Code Repository', desc: 'Central Git repository storing infrastructure-as-code (Terraform/Helm) and microservice source code with branch protection policies.' },
    cicd: { title: 'CI/CD Engine', desc: 'Automates continuous integration build runners, static code analysis, security linting, and automated testing suites.' },
    build: { title: 'Build Artifacts', desc: 'Compiles immutable Docker container images tagged with unique git SHA commits and stored in encrypted ECR registry.' },
    testing: { title: 'Automated Testing', desc: 'Executes unit tests, integration tests, contract tests, and end-to-end user journey validation.' },
    prod: { title: 'Production Environment', desc: 'High-availability Kubernetes cluster deployed across multiple Availability Zones with automated pod autoscaling.' },
    monitoring: { title: 'Monitoring & Telemetry', desc: 'Prometheus & Grafana agents continuously scrap metrics, tracing, and logging telemetries every 2 seconds.' },
    customers: { title: 'End-User Customers', desc: 'Global customer traffic routed securely through Cloudflare CDN & Edge WAF firewalls.' }
  };

  archCards.forEach(card => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-arch');
      const info = archDescriptions[key];
      if (info) {
        openModal(`Architecture Node: ${info.title}`, `
          <p style="font-size:0.95rem; line-height:1.6; color:var(--text-main);">${info.desc}</p>
        `);
      }
    });
  });

  // --- 12. GLOBAL SEARCH MODAL ---
  const btnSearchTrigger = document.getElementById('btn-search-trigger');
  if (btnSearchTrigger) {
    btnSearchTrigger.addEventListener('click', () => {
      openModal('Global Search Control Center', `
        <div style="margin-bottom:16px;">
          <input type="text" id="global-search-input" placeholder="Search deployments, servers, incidents, docs..." style="width:100%; padding:12px; border-radius:var(--radius-md); background:#050811; border:1px solid var(--cyan-primary); color:var(--text-bright); font-size:0.95rem;" autofocus>
        </div>
        <div id="global-search-results" style="display:flex; flex-direction:column; gap:8px; max-height:260px; overflow-y:auto;">
          <div style="color:var(--text-muted); font-size:0.8rem; text-align:center;">Type a query to search infrastructure components...</div>
        </div>
      `);

      setTimeout(() => {
        const searchInput = document.getElementById('global-search-input');
        const searchResults = document.getElementById('global-search-results');

        if (searchInput && searchResults) {
          searchInput.addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase().trim();
            if (!q) {
              searchResults.innerHTML = '<div style="color:var(--text-muted); font-size:0.8rem; text-align:center;">Type a query...</div>';
              return;
            }

            const matches = [];
            // Search navigation tabs
            ['overview', 'infrastructure', 'deployment', 'cicd', 'monitoring', 'security', 'scalability', 'backup', 'incidents', 'documentation'].forEach(t => {
              if (t.includes(q)) matches.push({ title: `Dashboard View: ${t.toUpperCase()}`, action: () => { switchTab(t); closeModal(); } });
            });

            // Search docs
            state.documentation.forEach(d => {
              if (d.title.toLowerCase().includes(q) || d.content.toLowerCase().includes(q)) {
                matches.push({ title: `Doc: ${d.title}`, action: () => { switchTab('documentation'); closeModal(); } });
              }
            });

            if (matches.length === 0) {
              searchResults.innerHTML = '<div style="color:var(--text-muted); font-size:0.8rem; text-align:center;">No matching components found</div>';
            } else {
              searchResults.innerHTML = matches.map((m, idx) => `
                <div class="search-item-match" data-idx="${idx}" style="background:rgba(255,255,255,0.03); border:1px solid var(--border-subtle); padding:10px; border-radius:var(--radius-md); cursor:pointer; font-size:0.85rem; color:var(--text-bright);">
                  🔍 ${m.title}
                </div>
              `).join('');

              document.querySelectorAll('.search-item-match').forEach(el => {
                el.addEventListener('click', () => {
                  const idx = parseInt(el.getAttribute('data-idx'));
                  matches[idx].action();
                });
              });
            }
          });
        }
      }, 50);
    });
  }

  // --- 13. DOCUMENTATION READER ENGINE ---
  const docCategoriesList = document.getElementById('doc-categories-list');
  const docReaderBody = document.getElementById('doc-reader-body');
  const docSearchInput = document.getElementById('doc-search-input');

  function renderDocs(filterQuery = '') {
    if (!docCategoriesList) return;
    docCategoriesList.innerHTML = '';
    const filtered = state.documentation.filter(d =>
      d.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
      d.category.toLowerCase().includes(filterQuery.toLowerCase())
    );

    filtered.forEach((doc, idx) => {
      const btn = document.createElement('button');
      btn.className = `btn btn-secondary ${idx === 0 ? 'active' : ''}`;
      btn.style.cssText = 'text-align:left; justify-content:flex-start; margin-bottom:4px;';
      btn.innerHTML = `<div><strong>${doc.title}</strong><div style="font-size:0.7rem; color:var(--text-dim);">${doc.category}</div></div>`;
      btn.addEventListener('click', () => {
        document.querySelectorAll('#doc-categories-list button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (docReaderBody) docReaderBody.innerHTML = doc.content;
      });
      docCategoriesList.appendChild(btn);
    });

    if (filtered.length > 0 && docReaderBody) {
      docReaderBody.innerHTML = filtered[0].content;
    }
  }
  renderDocs();

  if (docSearchInput) {
    docSearchInput.addEventListener('input', (e) => {
      renderDocs(e.target.value);
    });
  }

  // --- 14. DYNAMIC VALUE FLUCTUATION (SIMULATING LIVE TELEMETRY) ---
  setInterval(() => {
    // Fluctuate server health
    const shVal = document.getElementById('val-server-health');
    if (shVal) {
      const v = (98.4 + Math.random() * 0.6).toFixed(1);
      shVal.textContent = `${v}%`;
    }

    // Fluctuate active users
    const auVal = document.getElementById('val-active-users');
    if (auVal) {
      const u = 24800 + Math.floor(Math.random() * 200);
      auVal.textContent = u.toLocaleString();
    }

    // Fluctuate requests / min
    const rpmVal = document.getElementById('val-req-min');
    if (rpmVal) {
      const r = 1820 + Math.floor(Math.random() * 60);
      rpmVal.textContent = r.toLocaleString();
    }

    // Fluctuate error rate
    const erVal = document.getElementById('val-error-rate');
    if (erVal) {
      const er = (0.10 + Math.random() * 0.04).toFixed(2);
      erVal.textContent = `${er}%`;
    }
  }, 2500);

  // --- 15. NATIVE HTML5 CANVAS CHARTS ENGINE ---
  const chartHistories = {
    cpu: [35, 40, 38, 45, 42, 50, 48, 42],
    memory: [55, 58, 60, 62, 59, 61, 64, 61],
    network: [110, 125, 130, 145, 140, 150, 142],
    response: [190, 182, 175, 195, 188, 184]
  };

  function drawLineChart(canvasId, dataPoints, strokeColor, fillColor) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const width = canvas.width = canvas.parentElement.clientWidth || 400;
    const height = canvas.height = canvas.parentElement.clientHeight || 200;

    ctx.clearRect(0, 0, width, height);

    const maxVal = Math.max(...dataPoints, 100);
    const minVal = 0;

    // Draw Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 3; i++) {
      const y = (height / 4) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Plot Line & Area
    const stepX = width / (dataPoints.length - 1);
    ctx.beginPath();

    dataPoints.forEach((val, idx) => {
      const x = idx * stepX;
      const y = height - ((val - minVal) / (maxVal - minVal)) * (height - 20) - 10;
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    // Stroke
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Fill Gradient
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();

    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, fillColor);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fill();
  }

  function drawSecurityScoreChart() {
    const canvas = document.getElementById('chart-security-score');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = 160;
    const h = canvas.height = 160;
    const cx = w / 2;
    const cy = h / 2;
    const radius = 60;

    ctx.clearRect(0, 0, w, h);

    // Track
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 12;
    ctx.stroke();

    // Score Arc (94%)
    const scorePct = 0.94;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, -Math.PI / 2, (-Math.PI / 2) + (Math.PI * 2 * scorePct));
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 12;
    ctx.lineCap = 'round';
    ctx.stroke();
  }

  function renderCharts() {
    drawLineChart('chart-cpu', chartHistories.cpu, '#06b6d4', 'rgba(6, 182, 212, 0.25)');
    drawLineChart('chart-memory', chartHistories.memory, '#8b5cf6', 'rgba(139, 92, 246, 0.25)');
    drawLineChart('chart-network', chartHistories.network, '#10b981', 'rgba(16, 185, 129, 0.25)');
    drawLineChart('chart-response', chartHistories.response, '#f59e0b', 'rgba(245, 158, 11, 0.25)');
    drawLineChart('chart-performance-analytics', chartHistories.response, '#3b82f6', 'rgba(59, 130, 246, 0.25)');
    drawSecurityScoreChart();
  }

  renderCharts();
  window.addEventListener('resize', renderCharts);

  // Push Live Chart Data
  setInterval(() => {
    chartHistories.cpu.shift();
    chartHistories.cpu.push(Math.floor(38 + Math.random() * 12));

    chartHistories.memory.shift();
    chartHistories.memory.push(Math.floor(58 + Math.random() * 6));

    chartHistories.network.shift();
    chartHistories.network.push(Math.floor(135 + Math.random() * 20));

    chartHistories.response.shift();
    chartHistories.response.push(Math.floor(178 + Math.random() * 15));

    renderCharts();
  }, 2000);

});
