var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.3345118790866053,
        "pitch": -0.03847336962912351,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": -0.800316036791834,
          "pitch": 0.01608585482217606,
          "rotation": 7.0685834705770345,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.16690038117090822,
          "pitch": 0.29918705167627735,
          "title": "Welcome",
          "text": "NUS Faculty of Engineering"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.27203362467041714,
        "pitch": -0.1710583493522133,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": -3.047677301297556,
          "pitch": 0.08016257392616843,
          "rotation": 0,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6130495907373188,
          "pitch": 0.0354350294574175,
          "title": "Atrium",
          "text": "Where students hang out"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.24048601630196131,
        "pitch": -0.25846300519067,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": 0.030247211208607183,
          "pitch": 0.035134476874624454,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        },
        {
          "yaw": -0.943276434084666,
          "pitch": 0.022044990256652852,
          "rotation": 5.497787143782138,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.482566970622635,
          "pitch": -0.03821052070487596,
          "title": "Engineering Auditorium",
          "text": "Where lectures are conducted"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
