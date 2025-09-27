const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();
require('dotenv').config({ path: '.env.deploy' });

const config = {
    user: process.env.FTP_USER,                  // Usuario FTP de HostGator
    password: process.env.FTP_PASSWORD,          // Contraseña FTP de HostGator
    host: process.env.FTP_HOST,                  // Servidor FTP de HostGator (ej: bigpollo.com.co)
    port: process.env.FTP_PORT || 21,            // Puerto FTP (por defecto 21)
    localRoot: __dirname + '/dist',              // Carpeta local (build de Vite)
    remoteRoot: '/',                 // Carpeta remota en HostGator
    include: ['*', '**/*', '.*'],               // Incluir todos los archivos, incluyendo ocultos
    exclude: [
        'dist/**/*.map',                         // Excluir source maps
        'node_modules/**',                       // Excluir node_modules
        '.git/**',                              // Excluir .git
        '.env*',                                // Excluir archivos de entorno
        '*.log'                                 // Excluir logs
    ],
    deleteRemote: false,                        // No eliminar archivos remotos
    forcePasv: true,                           // Usar modo pasivo FTP
    sftp: false                                // Usar FTP (no SFTP)
};

console.log('🚀 Iniciando despliegue a HostGator...');
console.log(`📁 Local: ${config.localRoot}`);
console.log(`🌐 Remoto: ${config.host}${config.remoteRoot}`);

ftpDeploy
    .deploy(config)
    .then(res => {
        console.log('✅ Despliegue completado exitosamente!');
        console.log(`📄 ${res.length} archivos subidos`);
        console.log('🌐 Sitio disponible en: https://bigpollo.com.co');
    })
    .catch(err => {
        console.error('❌ Error durante el despliegue:', err);
        process.exit(1);
    });

// Eventos para monitorear progreso
ftpDeploy.on('uploading', function(data) {
    console.log(`📤 Subiendo: ${data.filename} (${data.transferredFileCount}/${data.totalFilesCount})`);
});

ftpDeploy.on('uploaded', function(data) {
    console.log(`✅ Subido: ${data.filename}`);
});

ftpDeploy.on('log', function(data) {
    console.log(`📝 Log: ${data}`);
});