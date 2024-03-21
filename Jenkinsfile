pipeline {
    agent any
    stages {
        stage("deployment") {
            steps {
                script {
                    sh 'tar -cvzf dist.tar.gz *'
                    sh 'scp dist.tar.gz jenkins@65.2.29.148:/var/www/html/team1-fe-react/'
                    sh 'ssh jenkins@65.2.29.148 "cd /var/www/html/team1-fe-react/ && tar -xvzf dist.tar.gz"'
                    sh 'ssh jenkins@65.2.29.148 "cd /var/www/html/team1-fe-react/ && sudo chown -R jenkins:jenkins *"'
                    sh 'ssh jenkins@65.2.29.148 "cd /var/www/html/team1-fe-react/ && sudo npm install --legacy-peer-deps"'
                    sh 'ssh jenkins@65.2.29.148 "cd /var/www/html/team1-fe-react/ && sudo npm run build"'
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
