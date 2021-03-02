export let Cache = {
    "1": {
        "TF": {
            "type": "VAR",
            "name": "x0"
        },
        "FT": {
            "type": "NOT",
            "f": {
                "type": "VAR",
                "name": "x0"
            }
        },
        "FF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            }
        },
        "TT": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            }
        }
    },
    "2": {
        "TTFF": {
            "type": "VAR",
            "name": "x0"
        },
        "FFTT": {
            "type": "NOT",
            "f": {
                "type": "VAR",
                "name": "x0"
            }
        },
        "FFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            }
        },
        "TTTT": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            }
        },
        "TFTF": {
            "type": "VAR",
            "name": "x1"
        },
        "TFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "VAR",
                "name": "x1"
            }
        },
        "TTTF": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "VAR",
                "name": "x1"
            }
        },
        "FTFT": {
            "type": "NOT",
            "f": {
                "type": "VAR",
                "name": "x1"
            }
        },
        "FTFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "TTFT": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "FFTF": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "VAR",
                "name": "x1"
            }
        },
        "TFTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "VAR",
                "name": "x1"
            }
        },
        "FFFT": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "FTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "TFFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FTTF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        }
    },
    "3": {
        "TTTTFFFF": {
            "type": "VAR",
            "name": "x0"
        },
        "FFFFTTTT": {
            "type": "NOT",
            "f": {
                "type": "VAR",
                "name": "x0"
            }
        },
        "FFFFFFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            }
        },
        "TTTTTTTT": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            }
        },
        "TTFFTTFF": {
            "type": "VAR",
            "name": "x1"
        },
        "TTFFFFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "VAR",
                "name": "x1"
            }
        },
        "TTTTTTFF": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "VAR",
                "name": "x1"
            }
        },
        "TFTFTFTF": {
            "type": "VAR",
            "name": "x2"
        },
        "TFTFFFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "VAR",
                "name": "x2"
            }
        },
        "TTTTTFTF": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "VAR",
                "name": "x2"
            }
        },
        "FFTTFFTT": {
            "type": "NOT",
            "f": {
                "type": "VAR",
                "name": "x1"
            }
        },
        "FFTTFFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "TTTTFFTT": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "TFFFTFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x1"
            },
            "f2": {
                "type": "VAR",
                "name": "x2"
            }
        },
        "TFFFFFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "TTTTTFFF": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "TTTFTTTF": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x1"
            },
            "f2": {
                "type": "VAR",
                "name": "x2"
            }
        },
        "TTTFFFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "TTTTTTTF": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FTFTFTFT": {
            "type": "NOT",
            "f": {
                "type": "VAR",
                "name": "x2"
            }
        },
        "FTFTFFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "TTTTFTFT": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FFFFTTFF": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "VAR",
                "name": "x1"
            }
        },
        "TTFFTTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "VAR",
                "name": "x1"
            }
        },
        "FFFFTFTF": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "VAR",
                "name": "x2"
            }
        },
        "TFTFTTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "VAR",
                "name": "x2"
            }
        },
        "FFFFFFTT": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "FFTTTTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "FFFFTFFF": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "TFFFTTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FFFFTTTF": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "TTTFTTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FFFFFTFT": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FTFTTTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "TTTFTTFF": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x1"
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "TTFFTFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x1"
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FTFFFTFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x1"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FTFFFFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTTTFTFF": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTFTTTFT": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x1"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "TTFTFFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTTTTTFT": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTTFTFTF": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "VAR",
                "name": "x2"
            }
        },
        "TTFTFTFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "TFTFTFFF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "VAR",
                "name": "x2"
            }
        },
        "FTFTFTFF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FFTFFFTF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x2"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "FFTFFFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x2"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "TTTTFFTF": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x2"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "TFTTTFTT": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x2"
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "TFTTFFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x2"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "TTTTTFTT": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x2"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "TFTTFFTT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "FFTTFFTF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "FFFTFFFT": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FFFTFFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTTTFFFT": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTTTFTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FTTTFFFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTTTFTTT": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x0"
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFFFFTFF": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTFFTTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFFFTTFT": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTFTTTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFFFFFTF": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x2"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FFTFTTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x2"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FFFFTFTT": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x2"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "TFTTTTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x2"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FFFFFFFT": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFFTTTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFFFFTTT": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTTTTTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x0"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTFTTTFF": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x1"
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTFFFTFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x1"
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTFFTTTF": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x1"
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "TFFFTTFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x1"
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "TTFFTTFT": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x1"
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTFFTTFF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x1"
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTFFTFTF": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "TTFFFFTT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "TTFFFTFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTTFTFFF": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "TTFTFTFF": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTTFFFTF": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x2"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "TTFTFFFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TFTFTTFF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FFTTTTFF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FTFTTTFF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TFTTTFFF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x2"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FTTTFTFF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TFTTTFTF": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x2"
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "TFTFFFTF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x2"
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "TFTFTTTF": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x2"
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "TFFFTFTF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x2"
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "TFTFTFTT": {
            "type": "OR",
            "f1": {
                "type": "VAR",
                "name": "x2"
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FFTFTFTF": {
            "type": "AND",
            "f1": {
                "type": "VAR",
                "name": "x2"
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "TFTFFFTT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "TFTFFTFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTTFFTFF": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TFTTFFTF": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "TFTTFFFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFTTTFTF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FTFTTFTF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTFTTFFF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTTTFFTF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTTTFFTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFTTFFFT": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFTTTFTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FFTFFFTT": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FFTTFTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFFTFFTT": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTTTFTFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FFTTTFFF": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFTTTTTF": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFTTFTFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTFTFFFT": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            },
            "f2": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "TFFFFFTT": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTTFFFTT": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTFTFFTT": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TFFFTFTT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "TFFFTTTF": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TFFFTTFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TFFTTFFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TFFFFTFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TFFTFFFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTFTTFFF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTTTTFFT": {
            "type": "OR",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFTFTTTF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FTFFTTTF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTTFFTTF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTTFFTFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTTFFFFF": {
            "type": "AND",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTFTTTTF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTTTFTTF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x0"
                },
                "f2": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTFTTTFT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "FTFFFTFT": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            }
        },
        "FTFTFTTT": {
            "type": "OR",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FFFTFTFT": {
            "type": "AND",
            "f1": {
                "type": "NOT",
                "f": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FFTFTTFF": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FFFTTTFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTFFTFTT": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FTFFFTTT": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x1"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTFFTFTF": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFFTTFTT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TFTFTTFT": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFTFFTTT": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTTFTFTT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FTFFFFTT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTFTFTTT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFTFTFFF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            }
        },
        "FFFTFTFF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFTTTTFT": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTFFTFFF": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFFTTFFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TFFTTTTT": {
            "type": "OR",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFFFFTTF": {
            "type": "AND",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTTFTTFT": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTTFFTTT": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x1"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FFTFFTFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "TFTTFTTT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FFFTFFTF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FTFTTFTT": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x0"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                }
            }
        },
        "FTTFFTFF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TTFTTFFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "VAR",
                    "name": "x1"
                },
                "f2": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "FTTFFFTF": {
            "type": "AND",
            "f1": {
                "type": "OR",
                "f1": {
                    "type": "AND",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "OR",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        },
        "TFTTTFFT": {
            "type": "OR",
            "f1": {
                "type": "AND",
                "f1": {
                    "type": "OR",
                    "f1": {
                        "type": "VAR",
                        "name": "x0"
                    },
                    "f2": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "VAR",
                    "name": "x2"
                }
            },
            "f2": {
                "type": "AND",
                "f1": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x1"
                    }
                },
                "f2": {
                    "type": "NOT",
                    "f": {
                        "type": "VAR",
                        "name": "x2"
                    }
                }
            }
        }
    }
}


