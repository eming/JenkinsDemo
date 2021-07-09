pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building..'
      }
    }

    stage('Test') {
      steps {
        echo 'Testing..'
      }
    }

    stage('Stg') {
      steps {
        echo 'Deploying....'
      }
    }

    
    stage('Load Test - Stg3') {
      steps {
        sh '''k6 run disco-k6/search-autocomplete-v3-k6.js -v\
                 -e DISCOVERY_URL=http://stg3.dh-discovery-staging.net/search/api/v3/autocomplete\
                 -e DISCOVERY_PLATFORM=pandora\
                 -e DISCOVERY_REGION=asia-east\
                 -e DISCOVERY_LOAD_TEST_TYPE=constantDoubleTraffic\
                 -e DISCOVERY_MAX_VUS=100\
                 -e DISCOVERY_INITIAL_VUS=5\
                 -e DISCOVERY_START_RATE=60\
                 -e DISCOVERY_MAX_RATE=2200\
                 -e DISCOVERY_MAIN_STAGE_DURATION=180s\
                 -e DISCOVERY_RAMP_UP_STAGES_DURATION=60s\
                 -e DISCOVERY_RANDOMIZATION_LEVEL=100\
                 -e DISCOVERY_SET_VENDOR_LIST=true\
                 -e DISCOVERY_CHUNK_FILE_COUNT=1000'''
      }
    }
    
    stage('Live') {
      steps {
        input(message: 'Continue', id: 'wiat-for-input', ok: 'Yes Please')
        echo 'Deploy to live'
      }
    }

  }
  options {
    enforceBuildSchedule()
  }
}
