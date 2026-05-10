/* ──────────────────────────────────────────────────
   FILE MANAGER DATA & LOGIC
   ────────────────────────────────────────────────── */

const FILES = [
  { name: 'Nóminas_Mayo2025.pdf',           folder: 'Nóminas',      type: 'PDF',  size: '284 KB', modified: '05 May 2025', owner: 'Ana C.',   shared: false },
  { name: 'Nóminas_Abril2025.pdf',          folder: 'Nóminas',      type: 'PDF',  size: '278 KB', modified: '02 Apr 2025', owner: 'Ana C.',   shared: false },
  { name: 'Contrato_ClienteABC_2025.docx',  folder: 'Contratos',    type: 'DOCX', size: '142 KB', modified: '28 Apr 2025', owner: 'David R.', shared: true  },
  { name: 'Renovacion_Licencia.docx',       folder: 'Contratos',    type: 'DOCX', size: '98 KB',  modified: '15 Apr 2025', owner: 'Ana C.',   shared: true  },
  { name: 'RGPD_Politica_Interna_v3.pdf',   folder: 'RGPD Docs',    type: 'PDF',  size: '1.2 MB', modified: '04 May 2025', owner: 'Ana C.',   shared: false },
  { name: 'Acuerdo_Confidencialidad.pdf',   folder: 'Contratos',    type: 'PDF',  size: '67 KB',  modified: '20 Mar 2025', owner: 'Laura M.', shared: false },
  { name: 'BaseDatos_Clientes_2025.xlsx',   folder: 'Clientes',     type: 'XLSX', size: '540 KB', modified: '01 May 2025', owner: 'David R.', shared: false },
  { name: 'Factura_Proveedor_Telcos.pdf',   folder: 'Proveedores',  type: 'PDF',  size: '88 KB',  modified: '30 Apr 2025', owner: 'Laura M.', shared: false },
  { name: 'Presupuesto_ProyectoX_2025.xlsx', folder: 'Proyectos',   type: 'XLSX', size: '312 KB', modified: '25 Apr 2025', owner: 'Ana C.',   shared: true  },
  { name: 'Historial_Paciente_Confidencial.pdf', folder: 'Clientes', type: 'PDF', size: '2.1 MB', modified: '03 May 2025', owner: 'David R.', shared: false },
  { name: 'Plan_Auditoria_RGPD_2025.docx',  folder: 'RGPD Docs',    type: 'DOCX', size: '156 KB', modified: '10 Apr 2025', owner: 'Ana C.',   shared: false },
  { name: 'Inventario_Activos_TI.xlsx',     folder: 'Administración', type: 'XLSX', size: '420 KB', modified: '22 Apr 2025', owner: 'Laura M.', shared: true  },
];

const TYPE_ICONS = { PDF: '📕', DOCX: '📘', XLSX: '📗' };
const TYPE_COLORS = { PDF: 'text-red-400', DOCX: 'text-blue-400', XLSX: 'text-green-400' };

function renderFileTable() {
  const tbody = document.getElementById('file-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = FILES.map(f => `
    <tr class="file-row border-b border-slate-800/40 last:border-0">
      <td class="px-5 py-3.5">
        <div class="flex items-center gap-3">
          <input type="checkbox" class="accent-vault-blue flex-shrink-0" />
          <span class="text-lg flex-shrink-0">${TYPE_ICONS[f.type] || '📄'}</span>
          <div>
            <div class="text-white text-sm font-500">${f.name}</div>
            <div class="text-slate-500 text-xs">${f.folder}</div>
          </div>
        </div>
      </td>
      <td class="px-4 py-3.5 hidden md:table-cell">
        <span class="badge ${TYPE_COLORS[f.type] || 'text-slate-400'} bg-slate-800/60 border border-slate-700/30">${f.type}</span>
      </td>
      <td class="px-4 py-3.5 hidden lg:table-cell text-xs text-slate-500 font-mono">${f.size}</td>
      <td class="px-4 py-3.5 hidden lg:table-cell text-xs text-slate-500">${f.modified}</td>
      <td class="px-4 py-3.5">
        <div class="flex items-center gap-1.5">
          <span class="text-vault-green text-sm relative" title="Cifrado AES-256">
            🔒
          </span>
          <div>
            <div class="text-xs text-vault-green font-600">Cifrado</div>
            <div class="text-xs text-slate-600 font-mono">AES-256</div>
          </div>
          ${f.shared ? '<span class="ml-1 text-xs text-vault-blue" title="Compartido">👥</span>' : ''}
        </div>
      </td>
      <td class="px-4 py-3.5">
        <div class="flex gap-1">
          <button class="w-7 h-7 rounded-lg bg-navy-800 border border-slate-700/30 flex items-center justify-center text-xs hover:border-vault-blue/40 hover:text-vault-glow transition-all" title="Descargar">⬇</button>
          <button class="w-7 h-7 rounded-lg bg-navy-800 border border-slate-700/30 flex items-center justify-center text-xs hover:border-vault-blue/40 hover:text-vault-glow transition-all" title="Compartir">🔗</button>
          <button class="w-7 h-7 rounded-lg bg-navy-800 border border-slate-700/30 flex items-center justify-center text-xs hover:border-red-400/40 hover:text-red-400 transition-all" title="Eliminar">🗑</button>
        </div>
      </td>
    </tr>
  `).join('');
}
